# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Company.delete_all 
ExperienceItem.delete_all 
EducationItem.delete_all 
Post.delete_all
Comment.delete_all 
Skill.delete_all 
Connection.delete_all
Endorsement.delete_all




#COMPANY

app = Company.create!(name:'App Academy', 
                     field:'Computer Software', 
                     description:'App Academy is a software development school that seeks to change what people expect from education', 
                     website_url:'http://www.appacademy.io', 
                     location:'New York, NY'  )
c1 = open("https://gitin-seeds.s3.amazonaws.com/aa.png")
app.photo.attach(io: c1, filename: 'app.png')

gate = Company.create!(name: 'Colgate University', 
                     field:'Higher Education',  
                     description:'Liberal Arts College in upstate NY', 
                     website_url: 'http://www.colgate.edu', 
                     location: 'Hamilton, NY')
c2 = open("https://gitin-seeds.s3.amazonaws.com/gate.png");
gate.photo.attach(io: c2, filename: 'gate.png');

facebook = Company.create!(name:'Facebook', 
                     field:'Internet', 
                     description:'Our mission is to give people the power to build community and bring the world closer together.', 
                     website_url:'http://www.facebook.com', 
                     location:'Menlo Park, CA'  )
c3 = open("https://gitin-seeds.s3.amazonaws.com/fb.png")
facebook.photo.attach(io: c3, filename: 'facebook.png')


gm = Company.create!(name:'George Mason University', 
                     field:'Higher Education', 
                     description:'Patriots Brave & Bold.', 
                     website_url:'https://www2.gmu.edu/', 
                     location:'Fairfax, va'  )
c4 = open("https://gitin-seeds.s3.amazonaws.com/gm.png")
gm.photo.attach(io: c4, filename: 'gm.png')

harvard = Company.create!(name:'Harvard University', 
                     field:'Higher Education', 
                     description:'Devoted to excellence in teaching, learning, and research, and to developing leaders who make a difference globally.', 
                     website_url:'https://www.harvard.edu/', 
                     location:'Cambridge, Massachusetts'  )
c5 = open("https://gitin-seeds.s3.amazonaws.com/harvard.png")
harvard.photo.attach(io: c5, filename: 'harvard.png')

brook = Company.create!(name:'Millbrook School', 
                     field:'High School', 
                     description:'Non Sibi Sed Cunctis', 
                     website_url:'https://millbrook.edu', 
                     location:'Millbrook, NY'  )
c6 = open("https://gitin-seeds.s3.amazonaws.com/millbrook.png")
brook.photo.attach(io: c6, filename: 'brook.png')

boulder = Company.create!(name:'University of Colorado Boulder', 
                     field:'Higher Education', 
                     description:'Be Boulder', 
                     website_url:'https://www.colorado.edu/', 
                     location:'Boulder, Colorado'  )
c7 = open("https://gitin-seeds.s3.amazonaws.com/ucb.png")
boulder.photo.attach(io: c7, filename: 'boulder.png')

rei = Company.create!(name:'REI', 
                     field:'Retail', 
                     description:'We believe a life outdoors, is a life well lived.', 
                     website_url:'https://www.rei.com/', 
                     location:'kent, WA'  )
c8 = open("https://gitin-seeds.s3.amazonaws.com/rei.png")
rei.photo.attach(io: c8, filename: 'rei.png')

penguin = Company.create!(name:'Penguin Random House', 
                     field:'Publishing', 
                     description:'Penguin Random House is the world’s largest trade book publisher. ', 
                     website_url:'https://www.penguinrandomhouse.com/', 
                     location:'New York, NY'  )
c9 = open("https://gitin-seeds.s3.amazonaws.com/penguin.png")
penguin.photo.attach(io: c9, filename: 'penguin.png')

kx = Company.create!(name:'Kx- a division of First Derivatives plc', 
                     field:'Computer Software', 
                     description:'The kdb+ database is used for complex analytics on very large streaming datasets from IoT to financial services.', 
                     website_url:'https://kx.com/', 
                     location:'New York, NY'  )
c10 = open("https://gitin-seeds.s3.amazonaws.com/kx.png")
kx.photo.attach(io: c10, filename: 'kx.png')

upenn = Company.create!(name:'University of Pennsylvania', 
                     field:'Higher Education', 
                     description:'The University of Pennsylvania is one of the oldest universities in America and, as a member of the Ivy League, one of the most prestigious institutions of higher learning in all the world.', 
                     website_url:'https://www.upenn.edu/', 
                     location:'Philadelphia, PA'  )
c11 = open("https://gitin-seeds.s3.amazonaws.com/upenn.png")
upenn.photo.attach(io: c11, filename: 'upenn.png')

mg = Company.create!(name:'MaGrann Associates', 
                     field:'Construction', 
                     description:'Making Buildings Better for Over 35 Years', 
                     website_url:'https://www.magrann.com/', 
                     location:'Mount Laurel, NJ'  )
c12 = open("https://gitin-seeds.s3.amazonaws.com/mg.png")
mg.photo.attach(io: c12, filename: 'mg.png')

google = Company.create!(name:'Google', 
                     field:'Internet', 
                     description:'Our mission: Organize the world’s information and make it universally accessible and useful.', 
                     website_url:'https://www.google.com/', 
                     location:'Mountain View, CA'  )
c13 = open("https://gitin-seeds.s3.amazonaws.com/google.png")
google.photo.attach(io: c13, filename: 'google.png')


linkedin = Company.create!(name:'LinkedIn')
c14 = open("https://gitin-seeds.s3.amazonaws.com/linkedin.png")
linkedin.photo.attach(io: c14, filename: 'linkedin.png')


spotify = Company.create!(name:'Spotify')
c15 = open("https://gitin-seeds.s3.amazonaws.com/spotify.png")
spotify.photo.attach(io: c15, filename: 'spotify.png')

microsoft = Company.create!(name:'Microsoft')
c16 = open("https://gitin-seeds.s3.amazonaws.com/microsoft.png")
microsoft.photo.attach(io: c16, filename: 'microsoft.png')

airbnb = Company.create!(name:'AirBnB')
c17 = open("https://gitin-seeds.s3.amazonaws.com/airbnb.png")
airbnb.photo.attach(io: c17, filename: 'airbnb.png')

instagram = Company.create!(name:'Instagram')
c18 = open("https://gitin-seeds.s3.amazonaws.com/insta.png")
instagram.photo.attach(io: c18, filename: 'instagram.png')

starbucks = Company.create!(name:'Starbucks')
c19 = open("https://gitin-seeds.s3.amazonaws.com/0+(4).png")
starbucks.photo.attach(io: c19, filename: 'starbucks.png')

stanford = Company.create!(name:'Stanford University')
c20 = open("https://gitin-seeds.s3.amazonaws.com/0+(3).png")
stanford.photo.attach(io: c20, filename: 'stanford.png')

uchicago = Company.create!(name:'University of Chicago')
c21 = open("https://gitin-seeds.s3.amazonaws.com/0+(2).png")
uchicago.photo.attach(io: c21, filename: 'uchicago.png')

donorschoose = Company.create!(name:'DonorsChoose')
c22 = open("https://gitin-seeds.s3.amazonaws.com/0+(1).png")
donorschoose.photo.attach(io: c22, filename: 'donorschoose.png')

everfi = Company.create!(name:'Everfi')
c23 = open("https://gitin-seeds.s3.amazonaws.com/0.png")
everfi.photo.attach(io: c23, filename: 'everfi.png')

intuit = Company.create!(name:'Intuit')
c24 = open("https://gitin-seeds.s3.amazonaws.com/in.png")
intuit.photo.attach(io: c24, filename: 'intuit.png')

risd = Company.create!(name:'Rhode Island School of Design')
c25 = open("https://gitin-seeds.s3.amazonaws.com/r.png")
risd.photo.attach(io: c25, filename: 'risd.png')

wharton = Company.create!(name:'The Wharton School')
c26 = open("https://gitin-seeds.s3.amazonaws.com/w.png")
wharton.photo.attach(io: c26, filename: 'wharton.png')

uwis = Company.create!(name:'University of Wisconsin-Milwaukee')
c27 = open("https://gitin-seeds.s3.amazonaws.com/uw.png")
uwis.photo.attach(io: c27, filename: 'uwis.png')

tia = Company.create!(name:'Thought Into Action Entrepreneurship at Colgate')
c28 = open("https://gitin-seeds.s3.amazonaws.com/tia.png")
tia.photo.attach(io: c28, filename: 'tia.png')

waffle = Company.create!(name:'The Waffle Cookie')
c29 = open("https://gitin-seeds.s3.amazonaws.com/waffle.png")
waffle.photo.attach(io: c29, filename: 'waffle.png')



# new seed 
boston = Company.create!(name:'Boston College')
c30 = open("https://gitin-seeds.s3.amazonaws.com/bc.png")
boston.photo.attach(io: c30, filename: 'bc.png')

pfw = Company.create!(name:'Princeton Fitness & Wellness Center')
c31 = open("https://gitin-seeds.s3.amazonaws.com/pfw.jpg")
pfw.photo.attach(io: c31, filename: 'pfw.png')

mhs = Company.create!(name:'Montgomery High School')
c32 = open("https://gitin-seeds.s3.amazonaws.com/Screen+Shot+2019-08-30+at+2.35.19+PM.png")
mhs.photo.attach(io: c32, filename: 'mhs.png')

samsung = Company.create!(name:'Samsung')
c33 = open("https://gitin-seeds.s3.amazonaws.com/samsung.png")
samsung.photo.attach(io: c33, filename: 'samsung.png')

apm = Company.create!(name:'ASCEND Performance Materials')
c34 = open("https://gitin-seeds.s3.amazonaws.com/ascend.png")
apm.photo.attach(io: c34, filename: 'apm.png')

tfg = Company.create!(name:'The Forest Group .Inc')

texas = Company.create!(name:'The University of Texas at Austin')
c35 = open("https://gitin-seeds.s3.amazonaws.com/texas.jpg")
texas.photo.attach(io: c35, filename: 'tfg.png')




#USER 
demo = User.create!(email: 'demo@gmail.com' , 
                   password: 'hunter12', 
                   first_name: 'Si', 
                   last_name:'Wei', 
                   location: 'New York, NY', 
                   summary:"I am a full-stack developer skilled in Rails, React/Redux, SQL, Ruby, HTML, CSS and more. I also have experience in Python, Java, C and MATLAB through courses I took in school.

I am currently a junior at Colgate University, double-majoring in Computer Science and International Relations. I am thrilled to be participating in a highly-selective study abroad group in Geneva, Switzerland, for upcoming Spring. I will be taking classes at The Graduate Institute (IHEID) for International studies and French, while pursing a 14-week part-time internship in an IGO or INGO. As a Computer Science and International Relations double-major, I am particularly interested in ways we can use technology for social justice. My professional interests include software development, cyber security and entrepreneurship.

Outside of my academics and career, I am a part of Colgate's Division I athletics as a varsity cheerleader. I am a third year flyer who enjoys trying new stunts with my team as well as bringing spirit and passion to football fields and basketball courts. 

I am actively looking for internships for Summer 2020 and a job opportunity upon graduation (2021) in Software Engineering. Please contact me if you have any roles that I would be a good fit for! You can also reach me at swei@colgate.edu.", 
                   github_url:'', 
                   headline:'Software Engineer, Computer Science & International Relations Student at Colgate University')
u1= open("https://gitin-seeds.s3.amazonaws.com/si.jpeg")
demo.photo.attach(io: u1, filename: 'profile1.png')

demo.experience_items.create!(user_id: demo.id, 
                             title:'Vice President of Women in Computer Science' , 
                             company_id: gate.id, 
                             location:'Hamilton, NY', 
                             start_date: 'September 2019', 
                             end_date: '', 
                             description: '• Provide mentoring and tutoring for women in CS field in order to educate peers on the tech industry
• Hold 2 hour open tutor session every week to provide support for introductory computer science classes to further
understanding of concepts
• Collaborate with local high school and library programs to provide coding experience for youths and elders' )

demo.experience_items.create!(user_id: demo.id, 
                             title:'Teaching Assistant for Computer Science' , 
                             company_id: gate.id, 
                             location:'Hamilton, NY', 
                             start_date: 'September 2019', 
                             end_date: '', 
                             description: "Help students in Introduction to Computing (Python)" )

demo.experience_items.create!(user_id: demo.id, 
                             title:'Summer Research Assistant' , 
                             company_id: gate.id, 
                             location:'Hamilton, NY', 
                             start_date: 'June 2018', 
                             end_date: 'August 2018', 
                             description: '• Selected as one of two students to assist in a long-term research project on local water quality
                             • Performed various laboratory tests, field work and computer work using MATLAB and Microsoft Excel in order to
                             further support faculty research to be published in Spring 2019' )

 demo.experience_items.create!(user_id: demo.id, 
                             title:'Entrepreneur' , 
                             company_id: tia.id, 
                             location:'Hamilton, NY', 
                             start_date: 'September 2018', 
                             end_date: 'March 2019', 
                             description: '• Develop a start-up non-profit organization that provides financial support for college application process through
                             performing in-depth market research and delivering a 60 second pitch every session
                             • Participate in rigorous workshops on entrepreneurship with various alumni and mentors' )

demo.experience_items.create!(user_id: demo.id, 
                             title:'Public Relations Intern' , 
                             company_id: waffle.id, 
                             location:'Hamilton, NY', 
                             start_date: 'October 2017', 
                             end_date: 'May 2018', 
                             description: '• Collaborated directly with the CEO to develop marketing plans including winter holiday and Valentine’s day sales 

• Promoted the company through social media and seek for press opportunities' )


demo.education_items.create!(user_id: demo.id, 
                            school_id: aa.id, 
                            degree: 'N/A', 
                            field: 'Computer Software Engineering', 
                            start_yr: "2019", 
                            end_yr: "2019" , 
                            activities: '12-week, full-stack web development bootcamp with < 3% acceptance rate. Covered technologies include: Ruby,Rails, React, Redux SQL, Javascript, HTML/CSS, AWS, git' 
                            )

demo.education_items.create!(user_id: demo.id, 
                            school_id: gate.id, 
                            degree: 'B.A', 
                            field: 'Computer Science and International Relations', 
                            start_yr: "2017", 
                            end_yr: "2021" , 
                            activities: 'Varsity Cheerleading(Division 1), Community Leader, Academic Affairs Governance Board,  International Student Email Ambassador, The Waffle Cookies, SAT Math coach, Colgate Women In Business, Women in Computer Science(Vice President), Gamma Phi Beta Sorority (Diversity Chairwoman)' 
                            )

demo.education_items.create!(user_id: demo.id, 
                             school_id: brook.id, 
                             degree: 'High school', 
                             field: 'N/A', 
                             start_yr: "2014", 
                             end_yr: "2017" , 
                             activities: 'Cum Laude Society,Dorm Leader,International Student Ambassador, Student Tutor, Independent Science Research, Dance Captain, Assistant Choreographer' 
                             )






                    
                        
zuck = User.create!(email: 'zuck@gmail.com' , 
                             password: 'hunter12', 
                             first_name: 'Mark', 
                             last_name:'Zuckerberg', 
                             location: 'Palo Alto, California', 
                             summary:'Mark Elliot Zuckerberg is an American technology entrepreneur and philanthropist. Zuckerberg is known for co-founding and leading Facebook as its chairman and chief executive officer.He also co-founded and is a board member of the solar sail spacecraft development project Breakthrough Starshot.', 
                             github_url:'', 
                             headline:'Chief Executive Officer of Facebook')                            

zuck.experience_items.create!(user_id: zuck.id, 
                             title:'CEO of Facebook' , 
                             company_id: facebook.id, 
                             location:'Palo Alto, California', 
                             start_date: 'February 2004', 
                             end_date:  '', 
                             description: "Facebook's corporate mission is to give people the power to build community and bring the world closer together." )

zuck.education_items.create!(user_id: zuck.id, 
                             school_id: harvard.id, 
                             degree: 'N/A', 
                             field: 'Psychology & Computer Science', 
                             start_yr: "2002", 
                             end_yr: "2004" , 
                             activities: ' Alpha Epsilon Pi' 
                             )
u2= open("https://gitin-seeds.s3.amazonaws.com/zuck.png")
zuck.photo.attach(io: u2, filename: 'profile2.png')





hk = User.create!(email: 'hamza@gmail.com' , 
                             password: 'hunter12', 
                             first_name: 'Hamza', 
                             last_name:'Khanane', 
                             location: 'Greater New York City Area', 
                             summary:'I am a software engineer with experience in Full Stack, Machine Learning, and Mobile Application Development. With a passion to solve real-world problems, I am always on the lookout for new challenges.  I have the ability to write clean, scalable code and debug my way through it effectively.
                                      In terms of technical proficiency, I am knowledgeable in Java, C, Python, Ruby, and JavaScript.', 
                             github_url:'', 
                             headline:'Software Engineer')                            

hk.experience_items.create!(user_id: hk.id, 
                             title:'Resident Advisor' , 
                             company_id: gm.id, 
                             location:'Fairfax, va', 
                             start_date: 'July 2018', 
                             end_date: 'May 2019', 
                             description: "Assisted 28 freshmen with their transition to college. Responsible for organizing educational and community building programs for residents." )

hk.education_items.create!(user_id: hk.id, 
                           school_id: aa.id, 
                           degree: 'N/A', 
                           field: 'Computer Software Engineering', 
                           start_yr: '2019', 
                           end_yr: '2019', 
                           activities: '12-week immersive program focused on Full Stack Development with <3% acceptance rate and more than 1000 hours of programming. Technologies covered: Ruby on Rails, React, Redux, D3, JQuery, PostgreSQL.'
                          )


hk.education_items.create!(user_id: hk.id, 
                             school_id: gm.id, 
                             degree: 'Bachelor of Science', 
                             field: 'Computer Science', 
                             start_yr: "2015", 
                             end_yr: "2019" , 
                             activities: 'I have excelled on my individual and team programming assignments creating new data mining programs using large public datasets, building customer and service provider integrations in an Android environment, and designing an Alexa task list tool. Besides the technologies already listed, my coursework has included: autonomous robotics, data structures and algorithms, object-oriented programming, and software testing.' 
                             )

u3= open("https://gitin-seeds.s3.amazonaws.com/hamza.png")
hk.photo.attach(io: u3, filename: 'profile3.png')




jw = User.create!(email: 'jessica@gmail.com' , 
                             password: 'hunter12', 
                             first_name: 'Jessica', 
                             last_name:'White', 
                             location: 'Brooklyn, NY', 
                             summary:'As a full stack developer with experience in JavaScript, React, and Ruby on Rails, I thrive at the crux of creativity and problem solving. Coming from a marketing background, I prioritize clear communication and excel in cross-functional, collaborative environments. In my spare time, I perform and teach dances of the Jazz Era.', 
                             github_url:'', 
                             headline:'Software Engineer')                            

jw.experience_items.create!(user_id: jw.id, 
                             title:'Assistant Marketing Manager' , 
                             company_id: penguin.id, 
                             location:'Fairfax, va', 
                             start_date: 'November 2017', 
                             end_date: 'May 2019', 
                             description: "• Assisted in the development of title marketing campaigns for Viking and Riverhead imprints\n• Tracked sales information and coordinates reactive marketing and advertising efforts for each title\n• Developed and amplified authors’ online presence, including social media strategy and website design\n• Contributed to the @vikingbooks and @riverheadbooks social media platforms (Facebook, Twitter, Instagram and YouTube)" )

jw.experience_items.create!(user_id: jw.id, 
                             title:'Visual Presentation & Sales Specialist' , 
                             company_id: rei.id, 
                             location:'Colorado, Boulder', 
                             start_date: 'May 2010', 
                             end_date: 'December 2015', 
                             description: "• Analyzed sales performance, use performance results to help with prioritization of product/floor shifts and brand focus \n
                             • Provided consistent updates on sales driving strategies, product/brand initiatives and requests, store issues and opportunities \n
                             • Provided training to sales specialists on visual marketing and product flow \n
                             • Ensured development and execution of merchandise presentation standards and product flows \n
                             • Identified customer needs and effectively communicated technical product knowledge" )                             

jw.education_items.create!(user_id: jw.id, 
                             school_id: boulder.id, 
                             degree: 'Bachelor of Arts', 
                             field: 'International Affairs & Psychology', 
                             start_yr: "2005", 
                             end_yr: "2010" , 
                             activities: 'Magna Cum Laude, Fencing Club, President(2006-2009)' 
                             )

jw.education_items.create!(user_id: jw.id, 
                             school_id: aa.id, 
                             degree: 'N/A', 
                             field: 'Computer Software Enginnering', 
                             start_yr: "2019", 
                             end_yr: "2019" , 
                             activities: '• Rigorous, 1000-hour full-stack software development course with < 3% applicant acceptance rate
• Studies included: OOP, single-page app development, TDD, scalability, algorithms and data structures, REST, application security, pair programming, and web development best practices' 
                             )                             
u4= open("https://gitin-seeds.s3.amazonaws.com/jessica.png")
jw.photo.attach(io: u4, filename: 'profile4.png')






ec = User.create!(email: 'eli@gmail.com' , 
                             password: 'hunter12', 
                             first_name: 'Eli', 
                             last_name:'Cohen', 
                             location: 'Greater New York City Area', 
                             summary:'Mechanical engineer turned software engineer. Experienced using q/kdb+, Python, Ruby, Rails, JavaScript, React, Redux, D3.js, and SQL. Outside interests include international and environmental sustainable development, and the beautiful game of soccer.', 
                             github_url:'', 
                             headline:'Software Engineer')                            

ec.experience_items.create!(user_id: ec.id, 
                             title:'Data Scientist' , 
                             company_id: kx.id, 
                             location:'Greater New York City Area', 
                             start_date: 'November 2018', 
                             end_date: 'May 2019', 
                             description: "- Worked as a q/kdb+ developer at the U.S. Securities and Exchange Commission on a high-frequency trading analytics platform 
- Led development of an internal tool to generate and automate testing of faux registrant trading activity created from billions of records across multiple stock exchanges 
- Validated JSON API endpoint to provide auditors with National Best Bid and Offer (NBBO) of stocks at specific moments in time 
- Completed accelerated training curated by kdb+ professionals to cover databases, data structures, and scripting in the q programming language" )

ec.experience_items.create!(user_id: ec.id, 
                             title:'Teaching Assistant, Grader' , 
                             company_id: upenn.id, 
                             location:'Philadelphia, PA', 
                             start_date: 'August 2017', 
                             end_date: 'December 2017', 
                             description: "- Led recitations and graded weekly problem sets and quizzes to reinforce mastery of material for MEAM 302 Fluid Mechanics students 
- Engaged in weekly meetings with teaching team to assess student performance throughout semester" )                      

ec.experience_items.create!(user_id: ec.id, 
                             title:'Technocal Consulting Intern' , 
                             company_id: mg.id, 
                             location:'Mt. Laurel, NJ', 
                             start_date: 'May 2017', 
                             end_date: 'August 2017', 
                             description: "- Interned in the Design & Existing Multifamily division of a building energy and engineering consulting firm
- Independently calculated Manual J heat loads for residences by learning RHVAC9 to properly size HVAC equipment
- Analyzed utility bills and modeled energy consumption of multifamily buildings to save thousands of dollars in wasted energy" ) 

ec.experience_items.create!(user_id: ec.id, 
                             title:'Machine Shop Assistant' , 
                             company_id: upenn.id, 
                             location:'Philadelphia, PA', 
                             start_date: 'June 2016', 
                             end_date: 'May 2017', 
                             description: "- Supervised student use of manual and CNC mills and lathes, as well as other machinery, to ensure safety 
- Utilized subtractive manufacturing techniques to fabricate parts for research projects and lab use based on provided engineering drawings" )     
                             
                             
ec.education_items.create!(user_id: ec.id, 
                             school_id: upenn.id, 
                             degree: 'Bachelor of Science in Engineering', 
                             field: 'Mechanical Engineering and Applied Mechanics (Major), Mathematics (Minor)', 
                             start_yr: "2014", 
                             end_yr: "2018" , 
                             activities: "Magna Cum Laude, Engineers Without Borders (International Trip Leader), University of Pennsylvania Men's Club Soccer (Persident, Captain), Hexagon Senior Honor Society (Tangent), Phi Fraternity (Secretary, Rush Chair)"
                             )

ec.education_items.create!(user_id: ec.id, 
                             school_id: aa.id, 
                             degree: 'N/A', 
                             field: 'Computer Software Engineering', 
                             start_yr: "2019", 
                             end_yr: "2019" , 
                             activities: "1000-hour intensive full-stack web development program. Topics include Ruby, Rails, SQL, JavaScript, React, Redux, TDD, scalability, algorithms, design patterns, REST, security, single-page apps, and programming best practices"
                             )

u12= open("https://gitin-seeds.s3.amazonaws.com/eli.jpeg")
ec.photo.attach(io: u12, filename: 'profile12.png')

de = User.create!(email: 'daniel@gmail.com' , 
                             password: 'hunter12', 
                             first_name: 'Daniel', 
                             last_name:'Ek', 
                             location: 'Greater New York City Area', 
                             summary:'Daniel Ek (born 21 February 1983) is a Swedish billionaire entrepreneur and technologist. Ek is best known as the co-founder and CEO of the music streaming service Spotify', 
                             github_url:'', 
                             headline:'CEO and Founder at Spotify'
                             )                            

de.experience_items.create!(user_id: de.id, 
                             title:'Chairman & CEO' , 
                             company_id: spotify.id, 
                             location:'Stockholm, Stockholm County', 
                             start_date: 'April 2006', 
                             end_date: '', 
                             description: "" )
u5= open("https://gitin-seeds.s3.amazonaws.com/de.png")
de.photo.attach(io: u5, filename: 'profile5.png')





#kevin
ks = User.create!(email: 'kevin@gmail.com' , 
                             password: 'hunter12', 
                             first_name: 'Kevin', 
                             last_name:'Systrom', 
                             location: 'San Francisco, CA', 
                             summary:'Under Systrom as CEO, Instagram became a fast growing app, with 800 million monthly users as of September 2017', 
                             github_url:'', 
                             headline:'Instagram co-founder, former CEO'
                             )                            

ks.experience_items.create!(user_id: ks.id, 
                             title:'CEO' , 
                             company_id: instagram.id, 
                             location:'San Francisco Bay Area', 
                             start_date: 'January 2010', 
                             end_date: 'October 2018', 
                             description: "" )

ks.experience_items.create!(user_id: ks.id, 
                             title:'Corporate Development Associate' , 
                             company_id: google.id, 
                             location:'San Francisco Bay Area', 
                             start_date: 'March 2008', 
                             end_date: 'January 2009', 
                             description: "" )

                             
ks.education_items.create!(user_id: ks.id, 
                             school_id: stanford.id, 
                             degree: 'BS', 
                             field: 'Management Science and Engineering', 
                             start_yr: "2002", 
                             end_yr: "2006" , 
                             activities: 'Sigma Nu, Graduated with Distinction and Phi Beta Kappa honors. Graduated first in department of Management Science and Engineering majors.' 
                             )
u6= open("https://gitin-seeds.s3.amazonaws.com/ks.png")
ks.photo.attach(io: u6, filename: 'profile6.png')



#satya

sn = User.create!(email: 'satya@gmail.com' , 
                             password: 'hunter12', 
                             first_name: 'Satya', 
                             last_name:'Nadella', 
                             location: 'Redmond, Washington', 
                             summary:'As CEO of Microsoft, I define my mission and that of my company as empowering every person and every organization on the planet to achieve more. ', 
                             github_url:'', 
                             headline:'CEO at Microsoft'                             
                             )                            

sn.experience_items.create!(user_id: sn.id, 
                             title:'CEO' , 
                             company_id: microsoft.id, 
                             location:'Great Seattle Area', 
                             start_date: 'February 2014', 
                             end_date: '', 
                             description: "" )

sn.experience_items.create!(user_id: sn.id, 
                             title:'Member Board of Trustees' , 
                             company_id: uchicago.id, 
                             location:'Chicago, Illinois', 
                             start_date: 'September 2014', 
                             end_date: '', 
                             description: "" )

sn.experience_items.create!(user_id: sn.id, 
                             title:'Board Member' , 
                             company_id: starbucks.id, 
                             location:'Great Seattle Area', 
                             start_date: 'January 2017', 
                             end_date: '', 
                             description: "" )

                          
sn.education_items.create!(user_id: sn.id, 
                             school_id: uwis.id, 
                             degree: "Master's Degree", 
                             field: 'Computer Science', 
                             start_yr: "", 
                             end_yr: "" , 
                             activities: '' 
                             )
u7= open("https://gitin-seeds.s3.amazonaws.com/sn.png")
sn.photo.attach(io: u7, filename: 'profile7.png')


#jeff

jeff = User.create!(email: 'jeff@gmail.com' , 
                             password: 'hunter12', 
                             first_name: 'Jeff', 
                             last_name:'Weiner', 
                             location: 'San Francisco Bay Area', 
                             summary:"Internet executive with over 20 years of experience, including general management of mid to large size organizations, corporate development, product development, business operations, and strategy. 

                             Currently CEO at LinkedIn, the web's largest and most powerful network of professionals. 
                             
                             Prior to LinkedIn, was an Executive in Residence at Accel Partners and Greylock Partners. Primarily focused on advising the leadership teams of the firm's existing consumer technology portfolio companies while also working closely with the firm’s partners to evaluate new investment opportunities.
                             
                             Previously served in key leadership roles at Yahoo! for over seven years, most recently as the Executive Vice President of Yahoo!'s Network Division managing Yahoo's consumer web product portfolio, including Yahoo's Front Page, Mail, Search, and Media products.
                             
                             Specialties: general management, corporate development, product development, business operations, strategy, product marketing, non-profit governance ", 
                             github_url:'', 
                             headline:'CEO at LinkedIn'
                             )                            

jeff.experience_items.create!(user_id: jeff.id, 
                             title:'CEO' , 
                             company_id: linkedin.id, 
                             location:'San Francisco Bay Area', 
                             start_date: 'December 2008', 
                             end_date: '', 
                             description: "Connecting the world's professionals to make them more productive and successful. Since joining the company in December 2008, LinkedIn has grown its membership base from 33M to more than 630M, increased its revenue from $78M to over $6.4B and expanded the team from 338 employees to over 14,000." )

jeff.experience_items.create!(user_id: jeff.id, 
                             title:'Member, Board of Directors' , 
                             company_id: intuit.id, 
                             location:'Mountain View, CA', 
                             start_date: 'April 2012', 
                             end_date: '', 
                             description: "With revenue of $4B+ and approximately 8,000 employees, Intuit is a leading provider of innovative business and financial management solutions for small and medium-sized businesses, consumers, accounting professionals and financial institutions." )

jeff.experience_items.create!(user_id: jeff.id, 
                             title:'Member, Board of Directors' , 
                             company_id: donorschoose.id, 
                             location:'New York, NY', 
                             start_date: 'January 2007', 
                             end_date: '', 
                             description: "One of the web's leading philanthropic marketplaces, designed to enable teachers to upload classroom projects in need of funding, and for anyone to select and fund a project. " )   
                             
jeff.experience_items.create!(user_id: jeff.id, 
                             title:'Member Board of Directors' , 
                             company_id: everfi.id, 
                             location:'Washington D.C. Metro Area', 
                             start_date: 'September 2017', 
                             end_date: '', 
                             description: "Partnered with this innovative educational coursework and platform provider to develop and distribute The Compassion Project, an initiative designed to ensure compassion is taught in every primary school in the U.S." )   
                             
                             
jeff.education_items.create!(user_id: jeff.id, 
                             school_id: wharton.id, 
                             degree: 'Bachelor of Science', 
                             field: 'Economics', 
                             start_yr: "1988", 
                             end_yr: "1992" , 
                             activities: '' 
                             )
u8= open("https://gitin-seeds.s3.amazonaws.com/jeff.png")
jeff.photo.attach(io: u8, filename: 'profile8.png')





bc = User.create!(email: 'brian@gmail.com' , 
                             password: 'hunter12', 
                             first_name: 'Brian', 
                             last_name:'Chesky', 
                             location: 'San Francisco Bay Area', 
                             summary:'I am one of the founders and CEO of Airbnb. ', 
                             github_url:'', 
                             headline:'Co-founder, CEO @ Airbnb'
                             )                            

bc.experience_items.create!(user_id: bc.id, 
                             title:'Co-founder & CEO' , 
                             company_id: airbnb.id, 
                             location:'San Francisco, CA', 
                             start_date: 'October 2007', 
                             end_date: '', 
                             description: "www.airbnb.com" )

bc.education_items.create!(user_id: bc.id, 
                             school_id: risd.id, 
                             degree: 'Bachelor of Fine Arts', 
                             field: 'Industrial Design', 
                             start_yr: "1999", 
                             end_yr: "2004" , 
                             activities: '' 
                             )
u9= open("https://gitin-seeds.s3.amazonaws.com/bc.png")
bc.photo.attach(io: u9, filename: 'profile9.png')


#Jason 
jt = User.create!(email: 'jason@gmail.com' , 
                             password: 'hunter12', 
                             first_name: 'Jason', 
                             last_name:'Tee', 
                             location: 'Greater New York City Area', 
                             summary:'I am a full-time student at Boston College and skilled software engineer. Whether investigating seemingly impossible bugs or discussing innovative algorithmic solutions, I am constantly looking for new ways to sharpen my technical skills. While my friends will describe me as both an inquisitive and methodical learner, I place a strong emphasis in learning through teamwork and collaboration. Skilled in Rails, Ruby, Javascript, and SQL, I am eager to continue learning and developing full-stack web applications. ', 
                             github_url:'', 
                             headline:'Student at Boston College'
                             )                            

jt.experience_items.create!(user_id: jt.id, 
                             title:'Asian Caucus Community Relations Coordinator' , 
                             company_id: boston.id, 
                             location:'Chesnut Hill, MA', 
                             start_date: 'May 2007', 
                             end_date: '', 
                             description: "• Political organization that seeks to increase social awareness especially around the Boston College campus 
• Integrate the Boston College and Greater Boston areas to promote social justice for minority groups 
• Organize events to highlight Asian/Asian American issues that affect students of all ethnic backgrounds 
• Spearhead meetings with faculty, fellow BC students, and guest speakers" )

jt.experience_items.create!(user_id: jt.id, 
                             title:'Front Desk' , 
                             company_id: pfw.id, 
                             location:'Princeton, NJ', 
                             start_date: 'February 2016', 
                             end_date: 'December 2018', 
                             description: "• Managed a variety of customer service duties at the front desk, including phone and personal interaction with members in a
• Assisted with issues related to billing and personal training services, including dispute resolution and sales
• Reconciled cash drawer of $200 after every shift to check accuracy of the accounting system" )

jt.experience_items.create!(user_id: jt.id, 
                             title:'Forensics Speech and Debate Captain' , 
                             company_id: mhs.id, 
                             location:'Princeton, NJ', 
                             start_date: 'September 2016', 
                             end_date: 'February 2018', 
                             description: "• Managed logistics such as organizing meetings, coaching the team, and preparing weekly lectures and lesson plans
• Facilitated relationships between members, teachers, and the administration
• Planned a series of trips to local, state, and national tournaments
• Semi-finalist (’15) at Capitol Debate Round Robin Tournament
• 6th Place Speaker (’15) at Capitol Debate Round Robin Tournament" )

jt.education_items.create!(user_id: jt.id, 
                             school_id: boston.id, 
                             degree: 'Bachelor of Science', 
                             field: 'Mathematics & Computer Science', 
                             start_yr: "2018", 
                             end_yr: "2022" , 
                             activities: '' 
                             )

jt.education_items.create!(user_id: jt.id, 
                             school_id: aa.id, 
                             degree: 'N/A', 
                             field: 'Computer Software Engineering', 
                             start_yr: "2019", 
                             end_yr: "2019" , 
                             activities: '' 
                             )
jt.education_items.create!(user_id: jt.id, 
                             school_id: mhs.id, 
                             degree: 'High School', 
                             field: 'N/A', 
                             start_yr: "2014", 
                             end_yr: "2018" , 
                             activities: '' 
                             )                            

u10= open("https://gitin-seeds.s3.amazonaws.com/jason.jpeg")
jt.photo.attach(io: u10, filename: 'profile10.png')


#Lillian 
lw = User.create!(email: 'lilian@gmail.com' , 
                             password: 'hunter12', 
                             first_name: 'Lillian', 
                             last_name:'Wang', 
                             location: 'austin, Texas Area', 
                             summary:'', 
                             github_url:'', 
                             headline:'Software Engineer'
                             )                            

lw.experience_items.create!(user_id: lw.id, 
                             title:'Test Technology Intern' , 
                             company_id: samsung.id, 
                             location:'Austin, Texas Area', 
                             start_date: 'June 2018', 
                             end_date: 'August 2018', 
                             description: "• Scripted in C++ to automate the process of capacity planning for wafer testing by reconciling monthly production planning with run times 
• Automated the pulling of daily resistance check reports using Samsung’s proprietary software and analyzed these reports to distribute updates on probe card health concerns 
• Designed automated wafer contamination report to mimic composite defect maps for preventing tool downtime " )


lw.experience_items.create!(user_id: lw.id, 
                             title:'Packout and Logistics Co-op' , 
                             company_id: apm.id, 
                             location:'Pensacola, FL', 
                             start_date: 'August 2017', 
                             end_date: 'December 2017', 
                             description: "•	Design excess inventory control system using Kanbans to reduce total material on hand by 20% for $20K savings
•	Implement real time tracking of floor production rates for packaging department
•	Analyze major causal factors for demonstrated rate of production lagging behind maximum potential rate using Lean Six Sigma tools
•	Lock Out Tag Out and Fall Protection Authorized Person Training")




lw.experience_items.create!(user_id: lw.id, 
                             title:'Control Lab Co-op' , 
                             company_id: apm.id, 
                             location:'Chocolate Bayou, TX', 
                             start_date: 'January 2017', 
                             end_date: 'May 2017', 
                             description: "•	Improved current Control Lab equipment installation process using Six Sigma procedures
•	Built fundamental dashboard using Aspen and IP.21 to track incoming samples and results to/from the Control Lab
•	Translated equipment installation process to a visual, dynamic Excel timeline that shows progression 
•	Instituted process to prioritize incoming requests to the Control Lab based on availability of resources")



lw.experience_items.create!(user_id: lw.id, 
                             title:'Accounting Intern' , 
                             company_id: tfg.id, 
                             location:'Austin, Texas Area', 
                             start_date: 'June 2016', 
                             end_date: 'August 2016', 
                             description: "•Improved efficiency of the previous method to relay receivable accounts for customers 
•Engaged customers with delinquent receivables and resolved underlying issues 
•Implemented a system using Microsoft Excel to accurately record and measure output of contractors
•Ensured the health of the accounting system by accurately reconciling the daily closing accounts" )


lw.education_items.create!(user_id: lw.id, 
                             school_id: tfg.id, 
                             degree: "Bachelor's degree", 
                             field: 'Chemical Engineering, Buisness Foundations Certificate', 
                             start_yr: "2015", 
                             end_yr: "2019" , 
                             activities: '' 
                             )
lw.education_items.create!(user_id: lw.id, 
                             school_id: aa.id, 
                             degree: 'N/A', 
                             field: 'Computer Software Engineering', 
                             start_yr: "2019", 
                             end_yr: "2019" , 
                             activities: 'Rigorous software engineering bootcamp resulting in 1000+ hours of programming experience with a less than 3% acceptance rate' 
                             )

u11= open("https://gitin-seeds.s3.amazonaws.com/lilian.jpeg")
lw.photo.attach(io: u11, filename: 'profile11.png')


#13 








#Posts 
app_post = Post.create!(author_id: app.id, 
                        author_type: 'Company', 
                        body: "Once again, App Academy ranks #1 on SwitchUp's Best Coding Bootcamps! \n

                        Fun Fact: We've have held the #1 US Coding bootcamp ranking on SwitchUp since the inception of their rankings four years ago. \n
                        
                        If you're interested in learning more about App Academy and how you can hire our #1 trained software engineers, free of charge, send a message to us!")
p1 = open("https://gitin-seeds.s3.amazonaws.com/app-post.png")
app_post.photo.attach(io: p1, filename: 'app-post.png')


si_post = Post.create!(author_id: demo.id,
                       author_type: 'User', 
                       body: "This past weekend, I had an exciting opportunity to attend WECode 2019, a largest student-run conference for women in computer science, at Harvard University with my peers from Colgate University. I feel more empowered and proud being a young woman in the Computer Science industry after attending the conference. Throughout various workshops and talks, I was able to reinforce my interest in cyber security and entrepreneurship in the tech field. In addition, I found the keynotes by three women transforming our society with their innovative approaches truly inspiring. Dara Johnson Treseder’s advice to become a venture futurist, Pooja Sankar’s journey towards finding her passion and drive for finding Piazza and Jessica McKellar’s hard work in people’s system using programming were all extremely inspirational. I hope that one day I will be able to inspire young women and give back to this community as these women are doing. I am grateful for this experience and looking forward to be more involved in the CS industry.

                       #WhyWECode  #computerscience #conferences #womenintech" )
p2 = open("https://gitin-seeds.s3.amazonaws.com/si-post.png")
si_post.photo.attach(io: p2, filename: 'si-post.png')

gate_post = Post.create!(author_id: gate.id, 
                         author_type: 'Company',
                         body: "Our incredible alumni branch out into the world and make it a better place. \n

                         Our world-class faculty challenges the students to think. For 200 years we have helped students become thoughtful, critical thinkers and perceptive leaders. \n
                         
                         We foster diversity of thought and action founded in a Liberal Arts Core Curriculum that has been recognized as one of the most elegant in the country. At the same time, our community contributes to a vibrant campus culture that complements and expands on the knowledge created in our classrooms and labs. There isn't a week where a Colgate alum isn't back on campus."
                         )
p3 = open("https://gitin-seeds.s3.amazonaws.com/gate-post.png")
gate_post.photo.attach(io: p3, filename: 'gate-post.png')

fb_post = Post.create!(author_id: facebook.id, 
                       author_type:'Company', 
                       body: "Facebook Reality Labs (FRL) is the research science arm of Augmented/Virtual Reality (AR/VR) at Facebook. Learn from Chief Scientist Michael and other team members on what it's like to work there. 
                              “Facebook Reality Labs brings together a world-class team of researchers, developers, and engineers to create the future of how we work, play and connect with each other. We’re working toward developing the AR and VR technology necessary to make the mixed reality experience as essential as our smartphones and personal computers are today. From AR glasses and VR headsets to brain-computer interface and haptic interaction, we’re creating the next wave of technology just as previous generations have done for us.”—Michael A., Chief Scientist"
                        )
p4 = open("https://gitin-seeds.s3.amazonaws.com/fb-post.png")
fb_post.photo.attach(io: p4, filename:'fb-post.png')


google_post = Post.create!(author_id: google.id, 
                            author_type: 'Company', 
                            body: "Scenes from our most recent Google Sandbox event. The theme? Machine Learning Workshop. The day’s agenda included tech talks, coding exercises, a panel all about life at Google and more. Thank you to everyone who joined us!

                            \n Google Sandbox is a program series designed for industry professionals to explore career opportunities while gaining deeper insight into Google's technology, business, and culture. We’d love to see you at the next one! Sign up for notifications about upcoming events near you → https://goo.gle/2ScS7YK"
                            )
p5 = open("https://gitin-seeds.s3.amazonaws.com/google-post.png")
google_post.photo.attach(io: p5, filename:'google-post.png')


gate_post2 = Post.create!(author_id: gate.id, 
                          author_type: 'Company', 
                          body: "Colgate scholar atheletes at March Madness. Our students excel in both academics and atheletics."
                          )
p6 = open("https://gitin-seeds.s3.amazonaws.com/gate-post-2.png")
gate_post2.photo.attach(io: p6, filename:'gate-post2.png')



airbnb_post = Post.create!(author_id: airbnb.id, 
                          author_type: 'Company', 
                          body: "As a Data Scientist at #airbnb, Mihajlo Grbovic reveals how he got started in Machine Learning and how he uses it to help guests plan their perfect trip! "
                        )
p7 = open("https://gitin-seeds.s3.amazonaws.com/airbnb_post.png")
airbnb_post.photo.attach(io: p7, filename:'airbnb_post.png')



hk_post = Post.create!(author_id: hk.id, 
                          author_type: 'User', 
                          body: "Check out my app, TradeX, a RobinHood clone!"
                          )
p8 = open("https://gitin-seeds.s3.amazonaws.com/hamza_post.png")
hk_post.photo.attach(io: p8, filename:'hk-post.png')


linkedin_post = Post.create!(author_id: linkedin.id, 
                          author_type: 'Company', 
                          body: "We all approach work in different ways, including the words we use. Here's an in-depth look at how language impacts our world of work: "
                          )
p9 = open("https://gitin-seeds.s3.amazonaws.com/linkedin_post.png")
linkedin_post.photo.attach(io: p9, filename:'linkedin-post.png')

spotify_post = Post.create!(author_id: spotify.id, 
                          author_type: 'Company', 
                          body: "Spotify is seeking a Data Scientist, Advanced Marketing Analytics to build advanced marketing analytics solutions. You’ll play a key role in expanding Spotify’s marketing measurement abilities. The role reports into the Marketing Analytics team lead and there will be significant cross-functional collaboration. In addition, you’ll have the opportunity to leverage Spotify’s world-class user data infrastructure and collaborate with a global community of 100+ data analysts."
                          )
p10 = open("https://gitin-seeds.s3.amazonaws.com/spotify_post.png")
spotify_post.photo.attach(io: p10, filename:'spotify_post.png')


si_post2 = Post.create!(author_id: demo.id, 
                          author_type: 'User', 
                          body: "Currently looking for a Software Engineering Internship for Summer 2020. Please let me know if you have an opening!"
                          )

app_post2 = Post.create!(author_id: app.id, 
                        author_type: 'Company', 
                        body: "Smiles courtesy of our latest cohort of talented software engineers! 

Come meet the graduates of our #1 ranked web development program at our Software Engineer Showcase + Happy Hour on Thursday, September 5th in #NYC! 

To attend, sign up for your free ticket: http://bit.ly/2KijxKD ")
p11 = open("https://gitin-seeds.s3.amazonaws.com/aapost2.png")
app_post2.photo.attach(io: p11, filename: 'app-post2.png')



#Comments 
comment1 = Comment.create!(user_id: demo.id, post_id: hk_post.id, body: "Your project looks awesome!")
comment2 = Comment.create!(user_id: ec.id, post_id: hk_post.id, body: "Check out OpenStables as well.")
comment3 = Comment.create!(user_id: jt.od, post_id:app_post2.id, body: "So excited to present my projects!")
comment4 = Comment.create!(user_id: sn.id, post_id: app_post2.id, body: "Congratulations to all. Wish I could be there.")



#Connections 
connection1 = Connection.create!(requester_id: hk.id, requestee_id: demo.id, status: 'accepted')
connection2 = Connection.create!(requester_id: demo.id, requestee_id: ec.id, status: 'accepted')
connection3 = Connection.create!(requester_id: demo.id, requestee_id: jw.id, status: 'accepted')
connection4 = Connection.create!(requester_id: hk.id, requestee_id: ec.id, status: 'accepted')
connection5 = Connection.create!(requester_id: jw.id, requestee_id: hk.id, status: 'accepted')
connection6 = Connection.create!(requester_id: lw.id, requestee_id: demo.id, status: 'accepted')
connection7 = Connection.create!(requester_id: lw.id, requestee_id: hk.id, status: 'accepted')
connection8 = Connection.create!(requester_id: lw.id, requestee_id: ec.id, status: 'accepted')
connection9 = Connection.create!(requester_id: lw.id, requestee_id: jw.id, status: 'accepted')

connection10 = Connection.create!(requester_id: jeff.id, requestee_id: sn.id, status: 'accepted')
connection11 = Connection.create!(requester_id: jeff.id, requestee_id: ks.id, status: 'accepted')
connection12 = Connection.create!(requester_id: jeff.id, requestee_id: bc.id, status: 'accepted')
connection12 = Connection.create!(requester_id: jeff.id, requestee_id: de.id, status: 'accepted')




#Skills 
hk_java = hk.skills.create!(user_id: hk.id, 
                    title: 'Java')
hk_python = hk.skills.create!(user_id: hk.id, 
                    title: 'Python')
hk_c = hk.skills.create!(user_id: hk.id, 
                    title: 'C')
hk_ruby = hk.skills.create!(user_id: hk.id, 
                    title: 'Ruby')       
hk_js= hk.skills.create!(user_id: hk.id, 
                    title: 'JavaScript')
hk_ds= hk.skills.create!(user_id: hk.id, 
                    title: 'Data Structures')                    
hk_react= hk.skills.create!(user_id: hk.id, 
                    title: 'React.js')


demo_js = demo.skills.create!(user_id: demo.id, 
                    title: 'JavaScript')
demo_python = demo.skills.create!(user_id: demo.id, 
                    title: 'Python')
demo_css = demo.skills.create!(user_id: demo.id, 
                    title: 'CSS3')
demo_c = demo.skills.create!(user_id: demo.id, 
                    title: 'C')
demo_ruby = demo.skills.create!(user_id: hdemok.id, 
                    title: 'Ruby')  
demo_react= demo.skills.create!(user_id: demo.id, 
                    title: 'React.js')  


ec_js = ec.skills.create!(user_id: ec.id, 
                    title: 'JavaScript')
ec_ruby = ec.skills.create!(user_id: ec.id, 
                    title: 'Ruby')  
ec_react= ec.skills.create!(user_id: ec.id, 
                    title: 'React.js')  

jw_js = jw.skills.create!(user_id: jw.id, 
                    title: 'JavaScript')
jw_ruby = jw.skills.create!(user_id: jw.id, 
                    title: 'Ruby on Rails')  
jw_react= jw.skills.create!(user_id: jw.id, 
                    title: 'React.js')  


jt_react= jt.skills.create!(user_id: jt.id, 
                    title: 'React.js') 
jt_js = jt.skills.create!(user_id: jt.id, 
                    title: 'JavaScript')
jt_ruby = jt.skills.create!(user_id: jt.id, 
                    title: 'Ruby on Rails')  
                   


jeff_lead = jeff.skills.create!(user_id: jeff.id, 
                                title: 'Leadership')
jeff_pd = jeff.skills.create!(user_id: jeff.id, 
                                title: 'Product Development')                               
jeff_sm = jeff.skills.create!(user_id: jeff.id, 
                                title: 'Social Media')
jeff_ux = jeff.skills.create!(user_id: jeff.id, 
                                title: 'User Experience')




#Endorsements 
hk_java.endorsements.create!(user_id:demo.id, skill_id:hk_java); 
hk_java.endorsements.create!(user_id:ec.id, skill_id:hk_java); 

demo_js.endorsements.create!(user_id: hk.id, skill_id: demo_js); 
demo_js.endorsements.create!(user_id: ec.id, skill_id: demo_js); 
demo_js.endorsements.create!(user_id: jw.id, skill_id: demo_js); 
demo_react.endorsements.create!(user_id: hk.id, skill_id: demo_react); 
demo_react.endorsements.create!(user_id: ec.id, skill_id: demo_react); 

jt_react.endorsements.create!(user_id: demo.id, skill_id: jt_react); 

ec_js.endorsements.create!(user_id:demo.id, skill_id:ec_js);
ec_js.endorsements.create!(user_id:hk.id, skill_id:ec_js);

jw_js.endorsements.create!(user_id:hk.id, skill_id:jw_js);
jw_js.endorsements.create!(user_id:ec.id, skill_id:jw_js);


jeff_lead.endorsements.create!(user_id: sn.id, skill_id: jeff_lead); 