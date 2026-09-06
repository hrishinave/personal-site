import json
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
root=Path.cwd()
data=json.loads((root/'src/data/cv.json').read_text())
blue=HexColor('#073bea'); ink=HexColor('#15191f'); gray=HexColor('#505762')
styles={
 'name':ParagraphStyle('name',fontName='Helvetica-Bold',fontSize=25,leading=30,textColor=ink,spaceAfter=7),
 'contact':ParagraphStyle('contact',fontName='Helvetica',fontSize=9,leading=13,textColor=gray,spaceAfter=4),
 'section':ParagraphStyle('section',fontName='Helvetica-Bold',fontSize=10,leading=14,textColor=blue,spaceBefore=15,spaceAfter=8),
 'title':ParagraphStyle('title',fontName='Helvetica-Bold',fontSize=10,leading=13,textColor=ink,spaceAfter=3),
 'meta':ParagraphStyle('meta',fontName='Helvetica',fontSize=8.5,leading=12,textColor=gray,spaceAfter=4),
 'body':ParagraphStyle('body',fontName='Helvetica',fontSize=9,leading=12.3,textColor=ink,spaceAfter=5),
 'bullet':ParagraphStyle('bullet',fontName='Helvetica',fontSize=9,leading=12.3,textColor=ink,leftIndent=9,firstLineIndent=-9,spaceAfter=4),
}
flow=[]
def p(text,style='body'): return Paragraph(escape(text),styles[style])
def section(t): flow.append(p(t.upper(),'section'))
def entry(title,meta,bullets):
 group=[p(title,'title'),p(meta,'meta')]
 for b in bullets: group.append(p('- '+b,'bullet'))
 group.append(Spacer(1,5))
 flow.append(KeepTogether(group))
flow.extend([p('Hrishikesh Naveenam','name'),p('Dallas, TX  |  hrishinave@gmail.com  |  (469) 586-6902','contact'),Paragraph('<link href="https://github.com/hrishinave" color="#073bea">github.com/hrishinave</link>  |  <link href="https://linkedin.com/in/hrishikeshnaveenam" color="#073bea">linkedin.com/in/hrishikeshnaveenam</link>',styles['contact'])])
section('Education')
entry('The University of Texas at Dallas','B.S. Computer Science, Minor in Mathematics  |  May 2028  |  GPA: 3.72', ['Coursework: Data Structures and Algorithms, Object-Oriented Programming, Discrete Mathematics, Computer Architecture, Linear Algebra, Probability and Statistics.'])
section('Research experience')
for x in data['research']:
 entry(x['role'],x['date']+'  |  '+x['context'],x['bullets'])
section('Open source')
x=data['opensource']
entry('OpenWorker - Contributor','Python / FastAPI / REST  |  PR #185',[x['summary'],x['detail']])
flow.append(Paragraph('<link href="'+x['href']+'" color="#073bea">github.com/andrewyng/openworker/pull/185</link>',styles['meta']))
section('Honors and awards')
flow.extend([p('2nd Place, PNC Track - HackUTD 2025 (350+ participants) | November 2025'),p("Dean's List, UT Dallas | Fall 2024")])
flow.append(PageBreak())
section('Projects')
for x in data['projects']:
 bullets=[x['summary']]+x['bullets'][:2]
 entry(x['title'], ' | '.join(v for v in [x['date'],x['stack']] if v),bullets)
 if x['links']: flow.append(Paragraph('<link href="'+x['links'][0]['href']+'" color="#073bea">'+escape(x['links'][0]['href'].replace('https://',''))+'</link>',styles['meta']))
flow.append(PageBreak())
section('Leadership and involvement')
for x in data['leadership']:
 entry(x['title']+' - '+x['organization'],x['date']+'  |  '+x['context'],[x['summary']]+x['bullets'])
section('Technical skills')
for x in data['skills']:
 flow.extend([p(x['label'],'title'),p(x['value'])])
def footer(c,doc):
 c.setStrokeColor(blue); c.setLineWidth(1); c.line(43,40,569,40)
 c.setFillColor(gray); c.setFont('Helvetica',8)
 c.drawString(43,26,'Hrishikesh Naveenam  /  September 2026')
 c.drawRightString(569,26,str(doc.page))
out=root/'public/Hrishikesh_Naveenam_CV.pdf'
doc=SimpleDocTemplate(str(out),pagesize=(612,792),leftMargin=43,rightMargin=43,topMargin=36,bottomMargin=55,title='Hrishikesh Naveenam - CV',author='Hrishikesh Naveenam')
doc.build(flow,onFirstPage=footer,onLaterPages=footer)
print(out)
