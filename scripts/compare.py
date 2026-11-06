"""Side-by-side page of a released text and the draft that proposes the next
major, for a proposal pull request (e.g. proposals/v8-compare.html).

A local tool: CI runs only scripts/check.mjs. Run it from the repo root, so
the paths shown in the page are the ones in the repo:

    python3 -I scripts/compare.py v7.md 7.0.0 proposals/v8-draft.md \
        proposals/v8-compare.html [YYYY-MM-DD]

The date defaults to today. The table is Python's difflib.HtmlDiff, line by
line, without wrapping; moved text shows as removed and added.

MIT, see LICENSE-CODE
"""

import datetime
import difflib
import os
import re
import sys

STYLE = """:root{--bg:#fbfaf7;--fg:#1d1d1b;--muted:#6b6b66;--line:#e4e2dc;--add:#dcf3e1;--add-strong:#9fdcb0;--del:#fbe1df;--del-strong:#f2aaa4;--chg:#fdf3d0;--chg-strong:#f3d77c}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){--bg:#17181a;--fg:#e8e6e1;--muted:#9a978f;--line:#2c2d30;--add:#1e3a27;--add-strong:#2f6b42;--del:#43201f;--del-strong:#7a3330;--chg:#3d351b;--chg-strong:#7a6526}}
body{margin:0;background:var(--bg);color:var(--fg);font:15px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Inter,sans-serif}
header{max-width:72rem;margin:0 auto;padding:24px 16px 8px}
h1{font-size:1.4rem;margin:0 0 .3rem}
p{margin:.3rem 0;color:var(--muted);max-width:66ch}
.legend span{display:inline-block;padding:0 .45em;border-radius:3px;margin-right:.6em}
main{overflow-x:auto;padding:8px 16px 48px}
table.diff{border-collapse:collapse;margin:0 auto;font:13px/1.45 ui-monospace,SFMono-Regular,Menlo,monospace;width:100%;max-width:120rem}
table.diff td{padding:1px 6px;vertical-align:top;white-space:pre-wrap;word-break:break-word;border-bottom:1px solid var(--line)}
table.diff td:nth-child(3),table.diff td:nth-child(6){width:50%}
.diff_header{color:var(--muted);text-align:right;font-size:11px;user-select:none}
td.diff_next{display:none}
th.diff_next{display:none}
.diff_add{background:var(--add-strong)}.diff_chg{background:var(--chg-strong)}.diff_sub{background:var(--del-strong)}
tr:has(.diff_add) td:not(.diff_header){background:var(--add)}
tr:has(.diff_sub) td:not(.diff_header){background:var(--del)}
th{position:sticky;top:0;background:var(--bg);text-align:left;padding:6px;border-bottom:2px solid var(--line)}
"""

LEGEND = (
    '<p class="legend"><span style="background:var(--add-strong)">added</span>'
    '<span style="background:var(--del-strong)">removed</span>'
    '<span style="background:var(--chg-strong)">changed within a line</span></p>'
)


def major(path, pattern):
    m = re.fullmatch(pattern, os.path.basename(path))
    if not m:
        sys.exit(f"{path}: expected a file named like {pattern}")
    return m.group(1)


def main():
    if len(sys.argv) not in (5, 6):
        sys.exit(__doc__)
    old, release, new, out = sys.argv[1:5]
    date = sys.argv[5] if len(sys.argv) == 6 else datetime.date.today().isoformat()
    o = major(old, r"v(\d+)\.md")
    n = major(new, r"v(\d+)-draft\.md")
    summary = os.path.join(os.path.dirname(new), f"v{n}.md")
    with open(old, encoding="utf-8") as f:
        a = f.read().splitlines()
    with open(new, encoding="utf-8") as f:
        b = f.read().splitlines()
    table = difflib.HtmlDiff().make_table(a, b, f"v{o} ({release})", f"v{n} draft")
    page = (
        '<!doctype html><html lang="en"><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width,initial-scale=1">\n'
        f"<title>v{o} to v{n} Compare</title><style>\n{STYLE}</style></head><body>\n"
        f"<header><h1>AI Adoption Framework: v{o} ({release}) and the v{n} draft, side by side</h1>\n"
        f"<p>Left: <code>{old}</code>, release {release}. Right: <code>{new}</code>. "
        f"Generated {date} from the files in this pull request. Moved text shows as "
        "removed on one side and added on the other; the summary of changes is in "
        f"<code>{summary}</code>.</p>\n{LEGEND}\n</header><main>\n"
        f"{table}</main></body></html>\n"
    )
    with open(out, "w", encoding="utf-8") as f:
        f.write(page)


if __name__ == "__main__":
    main()
