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

brook = Company.create!(name:'MillBrook School', 
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

#USER 
demo = User.create!(email: 'demo@gmail.com' , 
                   password: 'hunter12', 
                   first_name: 'Si', 
                   last_name:'Wei', 
                   location: 'New York, NY', 
                   summary:'I am currently participating in a 12-week long software development bootcamp at App Academy to become a full-stack developer. I am thrilled to be participating in a highly-selective study abroad group in Geneva, Switzerland, for upcoming Spring. I will be taking classes at The Graduate Institute (IHEID) for International studies and French, while pursing a 14-week part-time internship in an IGO or INGO. As a Computer Science and International Relations double-major, I am particularly interested in ways we can use technology for social justice. My professional interests include software development, cyber security and entrepreneurship. I am actively looking for internships for Summer 2020 in software engineering. ', 
                   github_url:'', 
                   headline:'Computer Science & International Relations Student at Colgate University')
u1= open("https://gitin-seeds.s3.amazonaws.com/profile_img.png")
demo.photo.attach(io: u1, filename: 'profile1.png')

demo.experience_items.create!(user_id: demo.id, 
                             title:'Software Engineering Bootcamp' , 
                             company_id: app.id, 
                             location:'New York, NY', 
                             start_date: 'June 2019', 
                             end_date: 'August 2019', 
                             description: '12-week full-stack web development bootcamp with <3% acceptance rate' )

demo.experience_items.create!(user_id: demo.id, 
                             title:'Summer Research Assistant' , 
                             company_id: gate.id, 
                             location:'Hamilton, NY', 
                             start_date: 'June 2018', 
                             end_date: 'August 2018', 
                             description: 'Assist in research project' )

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
                             summary:'The immediate and long-term potential for the possible benefit intelligent technologies can have on transforming consumer experiences and business growth is what led me to pursue my current degree with an emphasis on, Machine Learning, cybersecurity, Mobile Application development and AI. As an undergraduate, I have had incredibly valuable project experience leveraging public data to demonstrate my programming, Agile project management, and team leadership skills. In terms of technical proficiency, I am knowledgeable of Java, C, Python, C++, Linux, GIT, Android Studio and AWS', 
                             github_url:'', 
                             headline:'Entry-Level Machine Learning, AI, and Mobile Application Development/Spring 2019 B.Sc. in Computer Science Graduate')                            

hk.experience_items.create!(user_id: hk.id, 
                             title:'Resident Advisor' , 
                             company_id: gm.id, 
                             location:'Fairfax, va', 
                             start_date: 'July 2018', 
                             end_date: 'May 2019', 
                             description: "Assisted 28 freshmen with their transition to college. Responsible for organizing educational and community building programs for residents." )

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
                             summary:'As a marketing manager at the Viking, Penguin, Penguin Classics & Riverhead imprints of Penguin Random House, Jessica enjoys helping authors and audiences find one another. In her spare time, she performs and teaches dances of the American Jazz Era.', 
                             github_url:'', 
                             headline:'Dancer, Marketer, and Developer-in-the-Making')                            

jw.experience_items.create!(user_id: jw.id, 
                             title:'Assistant Marketing Manager' , 
                             company_id: penguin.id, 
                             location:'Fairfax, va', 
                             start_date: 'November 2017', 
                             end_date: 'May 2019', 
                             description: "• Assisted in the development of title marketing campaigns for Viking and Riverhead imprints
                             • Tracked sales information and coordinates reactive marketing and advertising efforts for each title
                             • Developed and amplified authors’ online presence, including social media strategy and website design
                             • Contributed to the @vikingbooks and @riverheadbooks social media platforms (Facebook, Twitter, Instagram and YouTube)" )

jw.experience_items.create!(user_id: jw.id, 
                             title:'Visual Presentation & Sales Specialist' , 
                             company_id: rei.id, 
                             location:'Colorado, Boulder', 
                             start_date: 'May 2010', 
                             end_date: 'December 2015', 
                             description: "• Analyzed sales performance, use performance results to help with prioritization of product/floor shifts and brand focus
                             • Provided consistent updates on sales driving strategies, product/brand initiatives and requests, store issues and opportunities
                             • Provided training to sales specialists on visual marketing and product flow
                             • Ensured development and execution of merchandise presentation standards and product flows
                             • Identified customer needs and effectively communicated technical product knowledge" )                             

jw.education_items.create!(user_id: jw.id, 
                             school_id: boulder.id, 
                             degree: 'Bachelor of Arts', 
                             field: 'International Affairs & Psychology', 
                             start_yr: "2005", 
                             end_yr: "2010" , 
                             activities: 'Magna Cum Laude, Fencing Club, President(2006-2009)' 
                             )
u4= open("https://gitin-seeds.s3.amazonaws.com/jessica.png")
jw.photo.attach(io: u4, filename: 'profile4.png')






ec = User.create!(email: 'eli@gmail.com' , 
                             password: 'hunter12', 
                             first_name: 'Eli', 
                             last_name:'Cohen', 
                             location: 'Greater New York City Area', 
                             summary:' ', 
                             github_url:'', 
                             headline:'Data Scientist at Kx - a division of First Derivatives plc')                            

ec.experience_items.create!(user_id: ec.id, 
                             title:'Data Scientist' , 
                             company_id: kx.id, 
                             location:'Greater New York City Area', 
                             start_date: 'November 2018', 
                             end_date: 'May 2019', 
                             description: " " )

ec.experience_items.create!(user_id: ec.id, 
                             title:'Teaching Assistant, Grader' , 
                             company_id: upenn.id, 
                             location:'Philadelphia, PA', 
                             start_date: 'August 2017', 
                             end_date: 'December 2017', 
                             description: "MEAM 302 Fluid Mechanics" )                      

ec.experience_items.create!(user_id: ec.id, 
                             title:'Technocal Consulting Intern' , 
                             company_id: mg.id, 
                             location:'Mt. Laurel, NJ', 
                             start_date: 'May 2017', 
                             end_date: 'August 2017', 
                             description: "" ) 

ec.experience_items.create!(user_id: ec.id, 
                             title:'Machine Shop Assistant' , 
                             company_id: upenn.id, 
                             location:'Philadelphia, PA', 
                             start_date: 'June 2016', 
                             end_date: 'May 2017', 
                             description: "Precision Machining Laboratory" )     
                             
                             
ec.education_items.create!(user_id: ec.id, 
                             school_id: upenn.id, 
                             degree: 'Bachelor of Science in Engineering', 
                             field: 'Mechanical Engineering and Applied Mechanics (Major), Mathematics (Minor)', 
                             start_yr: "2014", 
                             end_yr: "2018" , 
                             activities: "Magna Cum Laude, Engineers Without Borders (International Trip Leader), University of Pennsylvania Men's Club Soccer (Persident, Captain), Hexagon Senior Honor Society (Tangent), Phi Fraternity (Secretary, Rush Chair)"
                             )

u5= open("https://gitin-seeds.s3.amazonaws.com/deafult-male.png")
ec.photo.attach(io: u5, filename: 'default-male.png')