# README

* Ruby version : 2.6.6

* System dependencies : tailwind, inline_svg, friendly_id, simple_form, devise, animate.css-rails

* Configuration

`application.html.erb` must be modified in order to make Tailwind.css work...

⋅⋅⋅In __development (default):__ `<%= stylesheet_link_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %>`

⋅⋅⋅In __production :__ `<%= stylesheet_pack_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %>`
