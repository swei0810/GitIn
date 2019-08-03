# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
Company.delete_all 

demo = User.create!(email: 'demo@gmail.com' , password: 'hunter12')
# c1 = Company.create!(name:'App Academy', field:'Computer Software', description:'App Academy is a software development school that seeks to change what people expect from education', website_url:'http://www.appacademy.io', location:'New York, NY'  )
# demo.experience_items.create!(title:'Software Engineering Bootcamp' ,  location:'New York, NY', start_date: '06/10/2019', end_date:null, description: '12-week full-stack web development bootcamp with <3% acceptance rate' )
demo.education_items.create!(user_id: demo.id, school: 'Colgate University', degree: 'B.A', field: 'Computer Science', start_yr: 2017, end_yr: 2021 , activities: 'Varsity Cheerleading, Vice President of Women in Computer Science' )
#seed firstname, lastname, etc Too