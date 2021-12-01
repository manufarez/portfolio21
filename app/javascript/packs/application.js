// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "@fortawesome/fontawesome-free/css/all.css"
import "tailwindcss/tailwind.css"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

require("stylesheets/application.scss")
require("packs/toggle")

var Trix = require("trix")
require("@rails/actiontext")

Trix.config.attachments.preview.caption.name = true
Trix.config.attachments.preview.caption.size = false
