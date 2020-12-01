# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

trails = [
    {
        Prop_ID: "B057",
        Name: "Salt Marsh Nature Trail",
        Location: "Enter behind the Salt Marsh Nature Center, located near the intersection of East 33rd Street and Avenue U.",
        Park_Name: "Marine Park",
        Length: "0.8 miles",
        Difficulty: nil,
        Other_Details: "The first half of this mile-long trail follows the shore of Gerritsen Beach, which empties into Jamaica Bay. The trail&rsquo;s second leg winds through a prairie of tall grass, where you can sometimes spot cottontail rabbits and ring-necked pheasants.<br>Check out our <a href=\"\/park-features\/hiking\/marine-park\">Marine Park Trails<\/a> page for a map and directions to scenic locations, and comfort stations and maps are also available inside the Salt Marsh Nature Center.",
        Accessible: "Y",
        Limited_Access: "N",
        lat: nil,
        lon: nil
    },
    {
        Prop_ID: "B073",
        Name: "Lullwater",
        Location: "Enter Park at Lincoln Road and Ocean Avenue entrance.  Trails begin or are near the Prospect Park Audubon Center.",
        Park_Name: "Prospect Park",
        Length: "1.0 mile",
        Difficulty: "Easy",
        Other_Details: "Explore the Lullwater to see how nature thrives in the heart of Brooklyn.  The Lullwater is a great place to see birds and other wildlife.  Bathrooms, caf&eacute; and trail guides are available at the Prospect Park Audubon Center.",
        Accessible: "N",
        Limited_Access: "N",
        lat: nil,
        lon: nil
    },
    {
        Prop_ID: "B073",
        Name: "Midwood",
        Location: "Enter Park at Lincoln Road and Ocean Avenue entrance. Trails begin or are near the Prospect Park Audubon Center.",
        Park_Name: "Prospect Park",
        Length: "0.75 miles",
        Difficulty: "Easy",
        Other_Details: "Step back in time with a walk through Brooklyn&rsquo;s oldest remaining forest. The Midwood, home to some of Prospect Park&rsquo;s largest trees, is a relic of Brooklyn&rsquo;s history, and was preserved and incorporated into the park during its original construction. The thirty-minute hike loops from Prospect Park&rsquo;s Audubon Center through a forest filled with birds and other animals.",
        Accessible: "N",
        Limited_Access: "N",
        lat: nil,
        lon: nil
    },
    {
        Prop_ID: "B073",
        Name: "Peninsula",
        Location: "Enter Park at Lincoln Road and Ocean Avenue entrance.  Trails begin or are near the Prospect Park Audubon Center.",
        Park_Name: "Prospect Park",
        Length: "0.5 miles",
        Difficulty: "Easy",
        Other_Details: "Discover how the Peninsula has changed over the last 300 years.  The Peninsula's restored landscapes provide scenic views, a home for Park wildlife, and great fishing.  Bathrooms, caf&eacute; and trail guides are available at the Prospect Park Audubon Center.",
        Accessible: "N",
        Limited_Access: "N",
        lat: nil,
        lon: nil
    },
    {
        Prop_ID: "B073",
        Name: "Waterfall",
        Location: "Enter Park at Lincoln Road and Ocean Avenue entrance.  Trails begin or are near the Prospect Park Audubon Center.",
        Park_Name: "Prospect Park",
        Length: "0.5 miles",
        Difficulty: "Easy",
        Other_Details: "Trace the source of the Lake on the Waterfall trail.  The Fallkill Falls is the first of six waterfalls that you will see along the Park's watercourse.  Bathrooms, caf&eacute; and trail guides are available at the Prospect Park Audubon Center.",
        Accessible: "N",
        Limited_Access: "N",
        lat: nil,
        lon: nil
    },
    {
        Prop_ID: "Q001",
        Name: "Alley Pond Trails",
        Location: "Park-wide. Check out our <a href=\"\/park-features\/hiking\/alley-pond-park\">Alley Pond Park Trails<\/a> page for a map and directions to scenic locations.",
        Park_Name: "Alley Pond Park",
        Length: "Various",
        Difficulty: "Various",
        Other_Details: "Numerous trails wind through native hardwood (oak-hickory) forest and kettle ponds.  The north end of the park boasts splendid salt marsh views.",
        Accessible: "N",
        Limited_Access: "N",
        lat: nil,
        lon: nil
    },
    {
        Prop_ID: "Q015",
        Name: "Blue Trail",
        Location: "Forest Park Drive East, off of Woodhaven Boulevard",
        Park_Name: "Forest Park",
        Length: "1.7 miles",
        Difficulty: nil,
        Other_Details: "Forest Park's numerous trails wind through native hardwood (oak-hickory) forest and kettle ponds.<br>Check out our <a href=\"\/park-features\/hiking\/forest-park\">Forest Park Trails<\/a> page for a map featuring entrances and directions to scenic locations.",
        Accessible: "N",
        Limited_Access: "N",
        lat: nil,
        lon: nil
    },
    {
        Prop_ID: "Q015",
        Name: "Orange Trail",
        Location: "Memorial Drive and Forest Park Drive East",
        Park_Name: "Forest Park",
        Length: "2.4 miles",
        Difficulty: nil,
        Other_Details: "This trail will lead you through a 2.4 mile adventurous hike along the perimeter of the forest. <br>Check out our <a href=\"\/park-features\/hiking\/forest-park\">Forest Park Trails<\/a> page for a map featuring entrances and directions to scenic locations.",
        Accessible: "N",
        Limited_Access: "N",
        lat: nil,
        lon: nil
    },
    {
        Prop_ID: "Q015",
        Name: "Yellow Trail",
        Location: "Metropolitan Avenue & Forest Park Drive East",
        Park_Name: "Forest Park",
        Length: "1.0 mile",
        Difficulty: nil,
        Other_Details: "Check out our <a href=\"\/park-features\/hiking\/forest-park\">Forest Park Trails<\/a> page for a map featuring entrances and directions to scenic locations.",
        Accessible: "N",
        Limited_Access: "N",
        lat: nil,
        lon: nil
    },
    {
        Prop_ID: "Q021",
        Name: "South Preserve Trail",
        Location: "Francis Lewis Boulevard and Union Turnpike",
        Park_Name: "Cunningham Park",
        Length: "3.0 miles",
        Difficulty: nil,
        Other_Details: "Numerous unnamed trails wind through native hardwood (oak-hickory) forest, which features a diverse ecosystem to support abundant wildlife. The parks&rsquo; Kettle Ponds feature the sounds of Spring Peepers and other species of frogs throughout the spring and summer season.",
        Accessible: "N",
        Limited_Access: "N",
        lat: nil,
        lon: nil
    },
    {
        Prop_ID: "R013",
        Name: "Greenbelt Blue Trail (Southern Trailhead)",
        Location: "Brielle Avenue & Roanoake Street",
        Park_Name: "La Tourette Parks & Golf Course",
        Length: "12.3 miles",
        Difficulty: "Easy\/Moderate",
        Other_Details: "This is the Greenbelt&rsquo;s longest marked trail.  Its northeastern trailhead at the Greenbelt&rsquo;s Deere Park can be accessed from Staten Island Boulevard.  Walk the trail to its end, near the Brielle Avenue-Roanoake Street intersection in Willowbrook, and you will either pass through or have a view of each of the Greenbelt&rsquo;s five distinct vegetation zones.",
        Accessible: "N",
        Limited_Access: "N",
        lat: nil,
        lon: nil
    },
    {
        Prop_ID: "Q007",
        Name: "Bayswater Park Hiking Trails",
        Location: "Check out our <a href=\"\/park-features\/hiking\/bayswater-park\">Bayswater Trails<\/a> page for a map featuring entrances and directions to scenic locations.",
        Park_Name: "Bayswater Park",
        Length: "0.25 miles",
        Difficulty: "Moderate",
        Other_Details: "From the playground of Bayswater Park, follow the painted signs on the ground into the fields. Where the Sidewalk ends, across the field a large wooden post marks the beginning of the trail.",
        Accessible: "N",
        Limited_Access: "N",
        lat: nil,
        lon: nil
    }]
#create a Borough record for each of the 5 boroughs
    Borough.create!(name: "bronx")
    Borough.create!(name: "brooklyn")
    Borough.create!(name: "manhattan")
    Borough.create!(name: "queens")
    Borough.create!(name: "staten island")
    
trails.each do |trail|
    case trail[:Prop_ID][0] #the first letter of the prop_id that denotes borough
    when "X"
        borough = Borough.find_by(name: "bronx")
    when "B"
        borough = Borough.find_by(name: "brooklyn")
    when "M"
        borough = Borough.find_by(name: "manhattan")
    when "Q"
        borough = Borough.find_by(name: "queens")
    when "R"
        borough = Borough.find_by(name: "staten island")
    else 
        "Error: Borough not found"
    end 
    borough.trails.create(name: trail[:Name], location: trail[:Location], park_name: trail[:Park_Name], length: trail[:Length], difficulty: trail[:Difficulty])
end