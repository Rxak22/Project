$(document).ready( () => {
    $('.popup').fadeOut();
    $('.register-form').fadeOut();
    $('.login-form').fadeOut();


    $('.register').click( () => {
        $('.popup').fadeIn(200);
        $('.register-form').slideDown();
    })
    $('.login').click( () => {
        $('.popup').fadeIn(200);
        $('.login-form').slideDown();
    })

    $('.login-fly').click( () => {
        $('.popup').fadeIn(200);
        $('.login-form').slideDown();
    })
    $('.register-fly').click( () => {
        $('.popup').fadeIn(200);
        $('.register-form').slideDown();
    })    
    $('.mark-close').click( () => {
        $('.box').slideUp();
        $('.popup').fadeOut();
    })

    // $('.facel').click( () => {
    //     $('.register-form').animate({marginLeft: '-400px'}).fadeOut();
    //     $('.login-form').fadeIn(700);
    // })
    // $('.facec').click( () => {
    //     $('.login-form').fadeOut(900);
    //     $('.register-form').fadeIn(-90).animate({marginLeft: '0'});
    // })

    $('.facel').click( () => {
        $('.register-form').hide(500);
        $('.login-form').show(500);
    })
    $('.facec').click( () => {
        $('.register-form').show(500);
        $('.login-form').hide(500);
    })

    // menu slider
    $('.popup-menu').fadeOut();
    $('.slide-bar').animate({ marginLeft: '-250px'});
    $('.more-bar').click( () => {
        $('.slide-bar').animate({ marginLeft: '0'});
        $('.popup-menu').fadeIn();
    })

    // $('.popup-menu').click( () => {
    //     $('.slide-bar').animate({ marginLeft: '-250px'});
    //     $('.popup-menu').fadeOut();
    // })

    // menu drop
    var dropMenu = {
        "<ion-icon name='home-outline' class='text-success pe-2'></ion-icon> House & Land": ["House for Sale", "House for Rent", "Condo For Rent","Condo For Sale", "Apartement For Sale", "Apartement For Rent", "Commercial Property For Sale", "Commercial Property For Rent", "Room For Rent", "Land For Sale", "Land For Rent"],
        "<ion-icon name='car-sport-outline' class='text-success pe-2'></ion-icon> Car & Vehicle": ["Car For Sale", "Car For Sale", "Car For Rent", "Bicycld For Sale", "Motorcylce For Sale", "Vehicle For Rent", "Tok Tok & Rermok For Sale", "Maintenance & Repair", "Part & Accessories", "Other", "Bicycle Fot Rent", "Tok Tok Rermok For Rent", "Motorcycle For Rent"],
        "<ion-icon name='phone-portrait-outline' class='text-success pe-2'></ion-icon> Phone & Tablet": ["Phone", "Tablet", "Smart Watch", "Accessories", "Phone Number", "Other"],
        "<ion-icon name='laptop-outline' class='text-success pe-2'></ion-icon> Computer & Accessories": ["Laptop", "Desktop", "All in One", "Monitor", "Printers & Scanners", "Part & Accessories", "Software", "Other"],
        "<ion-icon name='shirt-outline' class='text-success pe-2'></ion-icon> Fashion & Beauty": ["women's Fashion", "Men's Fashion", "Baby & Kids", "Bag and Luggage", "fashion Accessories", "Beauty & Healthcare", "Other"],
        "<ion-icon name='book-outline' class='text-success pe-2'></ion-icon> Book & Stationery": ["Book", "Stationery", "Other"],
        "<ion-icon name='fast-food-outline' class='text-success pe-2'></ion-icon> Food & Beverage": ["Meat", "Seafood", "Fruit", "Vegetables", "Beverages", "Grcery", "Bread & Wine", "Rice & Cereal", "Other"],
        "<ion-icon name='bed-outline' class='text-success pe-2'></ion-icon> Hotel & Transport": ["Boutique Hotels & Resorts", "Guesthouses", "Hotels", "Limousines Services", "Resorts", "Ticket Agencies", "Transportation", "Boat Transportations", "Courier Services"],
        "<ion-icon name='school-outline' class='text-success pe-2'></ion-icon> Education & Sport": ["Art School", "Beauty School", "Child Care Centres", "Computer School & training", "Cooking School", "Kindergartens", "Libraries", "Management trainging", "Overseas Education Consultant", "Primary,Secondary Hignt Schools", "Schools-Langeuages", "Tailoring Schooles", "Tutoring Sercive", "Universities & Colleges (Acadermic)"],
        "<ion-icon name='file-tray-full-outline' class='text-success pe-2'></ion-icon> Furniture & Decor": ["Tables & Desks", "Chairs & Sofas", "Wardrobes & Cabinets", "Shelves & Drawers", "Bed & Mattressers", "Curtain & Carpet", "Household Items", "Handicrafts Paintings", "Other Furniture"],
        "<ion-icon name='bus-outline' class='text-success pe-2'></ion-icon> Professional Services": ["Accounting", "Financial Services", "Advertising & Media", "Bridal Services", "Cleaning & Maid Services" , "Engineering", "Insurance", "Massage & Spa", "Hospitality, Travel & Tourism", "IT & Telecom", "Interior Deisign & Renovation", "Legal", "Movers & Logistics", "Plumbing & Electrical", "Property & Real Estate", "Supply Chain & Logistics", "Printing & Publishing", "Other Services", "Customer Clearance", "Postal Services", "Shiping Line & Agencies", "Research & Consulting"],
        "<ion-icon name='medkit-outline'class='text-success pe-2' ></ion-icon> Health & Medicine": ["Acupuncture Practitioners", "Ambulance Services", "Blood Banks & Centres", "General Clinics", "Condoms", "Counselling Services", "Dental Clinics", "Dermatologists", "Emergency - Medical", "Evacuation & Repatriation - Medical", "Gynaecologists", "Health Care Products & Services", "Hospitals", "Laboratories - Medical", "Medical Equipment & Supplies", "Ophthalmologists", "Oxygen", "-Pediatricians", "Pharmacies", "Physicians & Surgeons", "Physiotherapists", "Rehabilitation-Services", "Traditional-Medicine", "Veterinarians", "X-Ray-Laboratories", "Other"],
        "<ion-icon name='library-outline' class='text-success pe-2'></ion-icon> Construction Materials": ["Machinery", "Bricks-Clay", "Ceilings", "Cement", "Concrete", "Contractors", "Fence-Materials", "Fiberglass-Materials", "Floor-Materials", "Glass", "Glassware-Decorators", "Gypsum-Products", "Ladder", "Marbles-Granites", "Paint", "Pumps", "Roofing", "Sand-Gravel", "Stonework", "Swimming-Pool", "Wallpapers-Supplies", "Waterproofing-Materials", "Waterproofing Materials"],
        "<ion-icon name='logo-electron' class='text-success pe-2'></ion-icon> Electronics & Appliances": ["Washing Machines & Dryers", "Fridges-Freezers", "Air-Conditioning-Heating", "Electronic-Tools", "Consumer-Electronics", "Security-Camera", "Lighting", "Cameras-Camcorders", "TVs-Videos-and-Audios", "Home-Appliances", "Video-Games"]
    }
    get()
    function get() {
        var addIcon = '<ion-icon name="add-outline" class="add"></ion-icon>'
        var take = ""
        for (var key in dropMenu){
            var drop = dropMenu[key]
            var li = ""
            for (var i in drop) {
                li += '<li class="li-drop"><a>' + drop[i] + '</a></li>'
            }
            var ul = '<ul class="ul-drop">'+ li +'</ul>'
            take += '<li class="slider"><a>'+ key + '</a>'+ addIcon + ul +'</li>'
        }
        $('.slide-bar').find('ul').append(take)
    }
    $('.slide-bar').find('ul').on('click', '.slider', () => {
        $('.ul-drop').slideToggle();
        // $(this).find('.ul-drop').slideToggle();
    })
})