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
                            school: 'Colgate University', 
                            degree: 'B.A', 
                            field: 'Computer Science and International Relations', 
                            start_yr: "2017", 
                            end_yr: "2021" , 
                            activities: 'Varsity Cheerleading(Division 1), Community Leader, Academic Affairs Governance Board,  International Student Email Ambassador, The Waffle Cookies, SAT Math coach, Colgate Women In Business, Women in Computer Science(Vice President), Gamma Phi Beta Sorority (Diversity Chairwoman)' 
                            )

demo.education_items.create!(user_id: demo.id, 
                             school: 'Millbrook School', 
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
                             school: 'Harvard University', 
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
                             school: 'George Mason University', 
                             degree: 'Bachelor of Science', 
                             field: 'Computer Science', 
                             start_yr: "2015", 
                             end_yr: "2019" , 
                             activities: 'I have excelled on my individual and team programming assignments creating new data mining programs using large public datasets, building customer and service provider integrations in an Android environment, and designing an Alexa task list tool. Besides the technologies already listed, my coursework has included: autonomous robotics, data structures and algorithms, object-oriented programming, and software testing.' 
                             )
u3= open("https://gitin-seeds.s3.amazonaws.com/gm.png")
hk.photo.attach(io: u3, filename: 'profile3.png')










