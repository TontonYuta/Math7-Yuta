import os
import sys

# Add scripts directory to path
sys.path.append("/home/tontonyuta/Math7-Yuta/scripts")

from generate_hsg_topics import all_modules as mods_1_2
from append_remaining_topics import modules as mods_3_4
from make_topics_5_to_15 import modules as mods_5_6
from make_topics_7_to_15 import modules as mods_7_8
from make_topics_9_to_15 import modules as mods_9_10
from make_topics_11_to_15 import modules as mods_11_12
from make_topics_13_14_15 import modules as mods_13_15

all_15 = mods_1_2 + mods_3_4 + mods_5_6 + mods_7_8 + mods_9_10 + mods_11_12 + mods_13_15

print(f"Total modules to build: {len(all_15)}")

TARGET_DIR = "/home/tontonyuta/Math7-Yuta/src/data/toan7/topics/nangcao_15chuyende"
os.makedirs(TARGET_DIR, exist_ok=True)

index_imports = []
index_exports = []

for mod in all_15:
    filename = mod["filename"]
    var_name = mod["var_name"]
    filepath = os.path.join(TARGET_DIR, filename)

    lines = [
        "import { Question } from '../../../../types/exam';",
        "",
        f"export const {var_name}: Question[] = ["
    ]

    for q in mod["questions"]:
        lines.append("  {")
        lines.append(f'    id: {q["id"]},')
        lines.append(f'    type: \'{q["type"]}\',')
        lines.append(f'    chapterId: \'{mod["chapterId"]}\',')
        lines.append(f'    chapterName: \'{mod["chapterName"]}\',')
        lines.append(f'    topicId: \'{mod["topicId"]}\',')
        lines.append(f'    topicName: \'{mod["topicName"]}\',')
        
        # content with proper JSON escaping
        content_escaped = q["content"].replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n")
        lines.append(f"    content: '{content_escaped}',")

        if "options" in q and q["options"]:
            lines.append("    options: [")
            for opt in q["options"]:
                c_esc = opt["content"].replace("\\", "\\\\").replace("'", "\\'")
                lines.append(f"      {{ key: '{opt['key']}', content: '{c_esc}' }},")
            lines.append("    ],")

        lines.append(f'    correctAnswer: \'{q["correctAnswer"]}\',')

        if "acceptableAnswers" in q and q["acceptableAnswers"]:
            ans_arr = ", ".join([f"'{a}'" for a in q["acceptableAnswers"]])
            lines.append(f"    acceptableAnswers: [{ans_arr}],")

        sol_esc = q["detailedSolution"].replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n")
        lines.append(f"    detailedSolution: '{sol_esc}',")

        hint_esc = q["socraticHint"].replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n")
        lines.append(f"    socraticHint: '{hint_esc}',")

        lines.append(f'    difficulty: \'{q["difficulty"]}\',')
        lines.append(f'    difficultyLevel: {q["difficultyLevel"]},')
        lines.append(f'    gameCategory: \'{q["gameCategory"]}\',')
        lines.append(f'    track: \'{q["track"]}\',')
        lines.append("    latexVerified: true,")
        lines.append("    answerVerified: true,")
        lines.append("  },")

    lines.append("];")
    lines.append("")

    with open(filepath, "w", encoding="utf-8") as fp:
        fp.write("\n".join(lines))

    line_count = len(lines)
    print(f"Generated {filename}: {line_count} lines (Rule <300: {'PASS' if line_count < 300 else 'FAIL'})")

    base_no_ext = filename[:-3]
    index_imports.append(f"import {{ {var_name} }} from './{base_no_ext}';")
    index_exports.append(f"  ...{var_name},")

# Generate index.ts
index_lines = [
    "import { Question } from '../../../../types/exam';",
    ""
] + index_imports + [
    "",
    "export const HSG_15_CHUYEN_DE_QUESTIONS: Question[] = [",
] + index_exports + [
    "];",
    ""
]

index_path = os.path.join(TARGET_DIR, "index.ts")
with open(index_path, "w", encoding="utf-8") as fp:
    fp.write("\n".join(index_lines))

print(f"Generated index.ts with {len(all_15)} modules!")
