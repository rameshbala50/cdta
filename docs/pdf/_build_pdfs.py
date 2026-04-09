"""Build PDFs from project markdown docs using Edge headless."""
import os
import subprocess
import tempfile
import pathlib
import markdown

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
OUT  = os.path.abspath(os.path.dirname(__file__))
EDGE = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

# (source markdown path, output pdf filename)
DOCS = [
    ("README.md",                     "00-README.pdf"),
    ("docs/FUNCTIONAL_SPEC.md",       "01-Functional-Spec.pdf"),
    ("docs/TECHNICAL_SPEC.md",        "02-Technical-Spec.pdf"),
    ("docs/DATA_SCHEMA.md",           "03-Data-Schema.pdf"),
    ("docs/USER_GUIDE.md",            "04-User-Guide.pdf"),
    ("docs/ADMIN_RUNBOOK.md",         "05-Admin-Runbook.pdf"),
    ("docs/DEPLOYMENT.md",            "06-Deployment.pdf"),
    ("CHANGELOG.md",                  "07-Changelog.pdf"),
]

CSS = """
<style>
@page { size: A4; margin: 18mm 16mm; }
body { font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
       font-size: 10.5pt; line-height: 1.45; color: #1f2328; max-width: 100%; }
h1 { font-size: 22pt; border-bottom: 2px solid #0969da; padding-bottom: 6px; margin-top: 0; color: #0969da; }
h2 { font-size: 15pt; border-bottom: 1px solid #d1d9e0; padding-bottom: 3px; margin-top: 22px; color: #1f2328; }
h3 { font-size: 12pt; margin-top: 18px; color: #1f2328; }
h4 { font-size: 10.5pt; margin-top: 14px; color: #1f2328; }
p, li { font-size: 10.5pt; }
code { font-family: 'Cascadia Mono', Consolas, 'Courier New', monospace;
       background: #f6f8fa; padding: 1px 5px; border-radius: 4px; font-size: 9.5pt; }
pre { background: #f6f8fa; padding: 10px 12px; border-radius: 6px; overflow-x: auto;
      border: 1px solid #d1d9e0; font-size: 9pt; line-height: 1.35; }
pre code { background: none; padding: 0; }
table { border-collapse: collapse; width: 100%; margin: 10px 0; font-size: 9.5pt; }
th, td { border: 1px solid #d1d9e0; padding: 5px 8px; text-align: left; vertical-align: top; }
th { background: #f6f8fa; font-weight: 600; }
blockquote { border-left: 3px solid #0969da; padding: 4px 12px; color: #57606a;
             margin: 10px 0; background: #f6f8fa; }
hr { border: none; border-top: 1px solid #d1d9e0; margin: 18px 0; }
a { color: #0969da; text-decoration: none; }
ul, ol { padding-left: 22px; }
</style>
"""

def md_to_html(md_path, title):
    with open(md_path, "r", encoding="utf-8") as f:
        md_text = f.read()
    html_body = markdown.markdown(
        md_text,
        extensions=["tables", "fenced_code", "toc"],
    )
    return f"""<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>{title}</title>{CSS}</head>
<body>{html_body}</body></html>"""

def html_to_pdf(html_str, pdf_path):
    # Write to a path with no spaces so Edge file:// URL is unambiguous
    safe_dir  = tempfile.mkdtemp(prefix="cdta-pdf-")
    tmp_html  = os.path.join(safe_dir, "doc.html")
    safe_pdf  = os.path.join(safe_dir, "out.pdf")
    with open(tmp_html, "w", encoding="utf-8") as f:
        f.write(html_str)
    user_data = tempfile.mkdtemp(prefix="edge-pdf-")
    try:
        file_url = pathlib.Path(tmp_html).as_uri()
        cmd = [EDGE,
             "--headless",
             "--disable-gpu",
             "--no-sandbox",
             f"--print-to-pdf={safe_pdf}",
             "--no-pdf-header-footer",
             file_url]
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
        if result.returncode != 0:
            print("STDERR:", result.stderr[:500])
        if os.path.exists(safe_pdf):
            import shutil
            shutil.copy2(safe_pdf, pdf_path)
        else:
            print(f"  WARNING: {safe_pdf} not created")
    finally:
        import shutil
        shutil.rmtree(safe_dir, ignore_errors=True)
        shutil.rmtree(user_data, ignore_errors=True)

def main():
    for src, out in DOCS:
        src_path = os.path.join(ROOT, src)
        out_path = os.path.join(OUT, out)
        title = os.path.splitext(out)[0]
        print(f"  {src}  ->  docs/pdf/{out}")
        html = md_to_html(src_path, title)
        html_to_pdf(html, out_path)
    print(f"\nDone. {len(DOCS)} PDFs in docs/pdf/")

if __name__ == "__main__":
    main()
