# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
Company.delete_all 
ExperienceItem.delete_all 
EducationItem.delete_all 


demo = User.create!(email: 'demo@gmail.com' , 
                   password: 'hunter12', 
                   first_name: 'Si', 
                   last_name:'Wei', 
                   location: 'New York, NY', 
                   summary:'I am currently participating in a 12-week long software development bootcamp at App Academy to become a full-stack developer. I am thrilled to be participating in a highly-selective study abroad group in Geneva, Switzerland, for upcoming Spring. I will be taking classes at The Graduate Institute (IHEID) for International studies and French, while pursing a 14-week part-time internship in an IGO or INGO. As a Computer Science and International Relations double-major, I am particularly interested in ways we can use technology for social justice. My professional interests include software development, cyber security and entrepreneurship. I am actively looking for internships for Summer 2020 in software engineering. ', 
                   github_url:'', 
                   headline:'Computer Science & International Relations Student at Colgate University')

app = Company.create!(name:'App Academy', 
                     field:'Computer Software', 
                     description:'App Academy is a software development school that seeks to change what people expect from education', 
                     website_url:'http://www.appacademy.io', 
                     location:'New York, NY'  )
gate = Company.create!(name: 'Colgate University', 
                     field:'Higher Education', 
                     description:'Liberal Arts College in upstate NY', 
                     website_url: 'http://www.colgate.edu', 
                     location: 'Hamilton, NY')


demo.experience_items.create!(user_id: demo.id, 
                             title:'Software Engineering Bootcamp' , 
                             company_id: app.id, 
                             location:'New York, NY', 
                             start_date: '06/10/2019', 
                             end_date: '08/30/2019', 
                             description: '12-week full-stack web development bootcamp with <3% acceptance rate' )

demo.experience_items.create!(user_id: demo.id, 
                             title:'Summer Research Assistant' , 
                             company_id: gate.id, 
                             location:'Hamilton, NY', 
                             start_date: '06/09/2018', 
                             end_date: '08/15/2018', 
                             description: 'Assist in research project' )

demo.education_items.create!(user_id: demo.id, 
                            school: 'Colgate University', 
                            degree: 'B.A', 
                            field: 'Computer Science and International Relations', 
                            start_yr: 2017, 
                            end_yr: 2021 , 
                            activities: 'Varsity Cheerleading(Division 1), Community Leader, Academic Affairs Governance Board,  International Student Email Ambassador, The Waffle Cookies, SAT Math coach, Colgate Women In Business, Women in Computer Science(Vice President), Gamma Phi Beta Sorority (Diversity Chairwoman)' 
                            )

demo.education_items.create!(user_id: demo.id, 
                             school: 'Millbrook School', 
                             degree: 'High school', 
                             field: 'N/A', 
                             start_yr: 2014, 
                             end_yr: 2017 , 
                             activities: 'Cum Laude Society,Dorm Leader,International Student Ambassador, Student Tutor, Independent Science Research, Dance Captain, Assistant Choreographer' 
                             )


