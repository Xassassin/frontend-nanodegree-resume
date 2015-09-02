var bio = {
	"name": "Ghassan Knayzeh",
	"role": "Full-Stack Developer",
    "welcomeMessage": "Welcome to my online resume",
	"contacts": {
		"mobile": "(647) 638-4572",
		"eMail": "g.knayzeh@gmail.com",
		"twitter": "g7twtr",
		"githubURL": "https://github.com/Xassassin",
		"blogURL": "http://gknayzeh.com",
		"location": "Mississauga, ON"

	},
	"pictureURL": "images/profile.jpg",

	"skills": ["Java", "HTML", "JavaScript", "C"]
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.eMail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.githubURL);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blogURL);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedPictureURL = HTMLbioPic.replace("%data%", bio.pictureURL);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedWelcomeMessage);
    $("#header").prepend(formattedPictureURL);


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedBlog);
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedBlog);
    $("#footerContacts").append(formattedLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (index in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[index]));
        }
    }
}

var work = {
    "jobs": [
        {
            "employer": "Eaton",
            "title": "Intermediate Software Developer",
            "location": "Mississauga, ON",
            "dates": "January 2010 - Current",
            "description": "Design and develop the control software for a mixed/distributed lighting management system. Develop and maintain the legacy JSF/Web application for the lighting controls system. Design and develop the Web application for the central management software project.Designed and developed a stand-alone configuration tool for DALI sensor settings. Design, build, develop and maintain the DALI Sensor testing rig and software. Design and develop the DALI addressing station project."
        },{
            "employer": "Eaton",
            "title": "Quality Assurance/Junior Software Developer",
            "location": "Mississauga, ON",
            "dates": "September 2007 - December 2009",
            "description": "Design, Develop, Implement and Execute all test plans for the all software projects in the lighting management system, including Java, JSF, html, JavaScript and PLC code."
        },{
            "employer": "Eaton",
            "title": "Quality Assurance/Junior Software Developer - Contractor",
            "location": "Mississauga, ON",
            "dates": "January 2007 - September 2007",
            "description": "Design, Develop, Implement and Execute all test plans for the all software projects in the lighting management system, including Java, JSF, html, JavaScript and PLC code."
        }
    ]
}

work.display = function() {
    if (work.jobs.length > 0) {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle =  HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedWorkLocation =  HTMLworkLocation.replace("%data%", work.jobs[job].location);

            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDescription);

        }
    }
}

var projects = {
    projects: [{
        "title": "Portfolio",
        "dates": "August, 2015",
        "description": "Portfolio Site to manage the rest of the projects.",
        "images" : [
            "images/197x148.gif",
            "images/197x148.gif"
        ]
    },{
        "title": "Online Resume",
        "dates": "August, 2015",
        "description": "Online version of my resume.",
        "images" : [
        ]
    }]
};

projects.display = function() {
    if (projects.projects.length > 0) {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
                }
            }

        }
    }
}

var education = {
    "schools": [ {
        "name": "McGill University",
        "location": "Montreal, QC",
        "degree": "Bachelors of Engineering",
        "major": "Electrical Engineering",
        "minor": "Software Engineering",
        "dates": "2001 - 2007",
        "url": "http://www.mcgill.ca"
    } ],
    "onlineCourses": [ {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "August, 2015",
        "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    },{
        "title": "Responsive Web Design Fundementals",
        "school": "Udacity",
        "dates": "August, 2015",
        "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    },{
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": "August, 2015",
        "url": "https://www.udacity.com/course/responsive-images--ud882"
    },{
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "August, 2015",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    },{
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "August, 2015",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    },{
        "title": "M101J: MongoDB For Java Developers",
        "school": "MongoDB University",
        "dates": "August, 2015",
        "url": "https://university.mongodb.com/courses/M101J/about"
    } ]

};

education.display = function() {
     if (education.schools.length > 0) {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolDate= HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDate);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);

        }
    }

    if (education.schools.length > 0) {
        $("#education").append(HTMLonlineClasses);
        for (onlineSchool in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedClassTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineSchool].title);
            var formattedClassSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineSchool].school);
            var formattedClassDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineSchool].dates);
            var formattedClassURL= HTMLonlineURL.replace("%data%", education.onlineCourses[onlineSchool].url);

            $(".education-entry:last").append(formattedClassTitle);
            $(".education-entry:last").append(formattedClassSchool);
            $(".education-entry:last").append(formattedClassDates);
            $(".education-entry:last").append(formattedClassURL);
        }
    }
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});