// Cuyahoga County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-29
//
// Every URL below was fetched and its content checked against the organization
// it claims to be, and against being in OHIO. Nothing was guessed from a
// naming pattern.
//
// CUYAHOGA IS A CHARTER COUNTY. There is NO County Auditor, no Board of
// Commissioners and no elected Recorder: an elected County Executive and an
// 11-member County Council replaced the commissioners in January 2011, and the
// FISCAL OFFICER holds the auditor + recorder (+ non-court clerk) powers.
// There is also a MEDICAL EXAMINER, not a coroner. Wording matters here.
//
// DOMAIN MIGRATIONS — the old domain often still resolves, which is the trap:
//
//   * Lyndhurst: lyndhurst-oh.com is the OLD site and is STILL LIVE and
//     styled "Official Website". The real site is lyndhurstohio.gov.
//   * shakeronline.com serves STALE content from the Earl Leiken era (he left
//     office in 2018). The city is shakerheightsoh.gov.
//   * chagrin-falls.org is not the village's site; chagrinfallsoh.gov is.
//   * Euclid moved cityofeuclid.com -> cityofeuclid.gov (302s across).
//   * Rocky River moved rrcity.com -> rockyriverohio.gov (302s across).
//   * Cuyahoga Heights moved .com -> cuyahogaheights.gov (302s across).
//   * North Royalton moved northroyalton.org -> northroyalton.gov.
//   * Mayfield Heights moved mayfieldheights.org -> mayfieldheightsohio.gov.
//   * Lakewood is lakewoodoh.gov; onelakewood.com has a broken www cert.
//   * Westlake is cityofwestlake.org; cityofwestlake.us does not resolve.
//   * Hunting Valley is huntingvalley.net; the .us domain is dead. The
//     village straddles the Cuyahoga/Geauga line.
//
// NAME COLLISIONS Ohio makes easy: Mayfield (village) vs Mayfield Heights,
// Brooklyn (city) vs Brooklyn Heights, Bedford vs Bedford Heights, Olmsted
// Falls (city) vs Olmsted Township, Chagrin Falls (village) vs Chagrin Falls
// Township — all DISTINCT Cuyahoga jurisdictions, each listed separately.
// Orange here is the Cuyahoga village, not Delaware County's Orange Township.
//
// LEFT OUT rather than listed unverified (each site refused automated
// fetching — a browser check is the gap in this file):
//   * cuyahogacounty.gov/treasury and /clerk-of-courts (county WAF)
//   * Middleburg Heights (middleburgheights.com, rate-limits)
//   * Cleveland Heights (clevelandheights.gov, times out)
//   * Moreland Hills (morelandhills.com, times out)
//   * Mayfield Heights (mayfieldheightsohio.gov, times out)
//   * Cleveland Public Library (cpl.org, 403 to fetchers)
//   * Destination Cleveland (thisiscleveland.com, JS wall)
//   * United Way of Greater Cleveland (unitedwaycleveland.org, JS wall)
//   * cleveland.com / The Plain Dealer (403 to every fetch, like the
//     Columbus Dispatch was for Franklin)
//   * WKYC, News 5 Cleveland, Fox 8 (fetch permission wall)
//
// GEOGRAPHY WORTH KNOWING:
//   * CUYAHOGA VALLEY NATIONAL PARK is mostly in Summit County; its Cuyahoga
//     County share is the north end (Brecksville/Valley View). Included
//     because it carries the county's name; the description says so.
//   * Notre Dame College (South Euclid) CLOSED in 2024 and is excluded.
//   * The county's lakefront legally extends miles into Lake Erie — Cleveland
//     Water's offshore intake cribs are real taxable parcels.

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county property-records portal (Fiscal Officer, not an Auditor).
export const AUDITOR_VENDOR = "Cuyahoga County Fiscal Officer MyPlace";

export const LINKS = [
  // ---------- Government: county ----------
  { name: "Cuyahoga County, Ohio", category: "Government", subcategory: "County", url: "https://cuyahogacounty.gov/", description: "Official portal of Ohio's charter county; headquarters at 2079 East Ninth Street in Cleveland, under County Executive Chris Ronayne." },
  { name: "Cuyahoga County Council", category: "Government", subcategory: "County", url: "https://cuyahogacounty.gov/council", description: "The 11-member legislative branch that replaced the three-commissioner board when the charter took effect in January 2011; chambers on the 4th floor of county headquarters." },
  { name: "Cuyahoga County Fiscal Officer", category: "Government", subcategory: "Fiscal Officer", url: "https://cuyahogacounty.gov/fiscal-officer", description: "Holds the powers of a county auditor and recorder under the charter — property appraisal, tax administration and land records; 2079 East Ninth Street, 3rd floor." },
  { name: "Cuyahoga County Fiscal Officer MyPlace", category: "Government", subcategory: "Fiscal Officer", url: "https://myplace.cuyahogacounty.gov/", description: "The county's property-records portal behind this project's parcel links — search by owner, parcel or address; the source this county's parcel map is verified against." },
  { name: "Cuyahoga County Board of Elections", category: "Government", subcategory: "Elections", url: "https://boe.cuyahogacounty.gov/", description: "County elections office at 1803 Superior Avenue in Cleveland." },
  { name: "Cuyahoga County Sheriff", category: "Government", subcategory: "Public Safety", url: "https://cuyahogacounty.gov/sheriff", description: "Sheriff's department at 1215 West 3rd Street in Cleveland — law enforcement, the county jail, civil services and foreclosure sales." },
  { name: "Cuyahoga County Medical Examiner", category: "Government", subcategory: "Public Safety", url: "https://cuyahogacounty.gov/medical-examiner", description: "Forensic pathology and death investigation at 11001 Cedar Avenue in Cleveland — a medical examiner, not a coroner, another mark of the charter." },
  { name: "Cuyahoga County Prosecutor", category: "Government", subcategory: "Courts", url: "https://www.ccprosecutor.us/", description: "Prosecutor Michael C. O'Malley's office at 1200 Ontario Street, with more than 230 prosecuting attorneys." },
  { name: "Court of Common Pleas", category: "Government", subcategory: "Courts", url: "https://cp.cuyahogacounty.gov/", description: "The county's general-division trial court at the Justice Center, 1200 Ontario Street in Cleveland." },
  { name: "Probate Court", category: "Government", subcategory: "Courts", url: "https://probate.cuyahogacounty.gov/", description: "Estates, marriage licenses, adoptions and guardianships, under Judges Anthony J. Russo and Laura J. Gallagher." },
  { name: "Juvenile Court", category: "Government", subcategory: "Courts", url: "https://juvenile.cuyahogacounty.gov/", description: "Juvenile Division at the Juvenile Justice Center, 9300 Quincy Avenue in Cleveland." },
  { name: "Domestic Relations Court", category: "Government", subcategory: "Courts", url: "https://domestic.cuyahogacounty.gov/", description: "Divorce, custody and protection orders at 1 West Lakeside Avenue in Cleveland." },
  { name: "Eighth District Court of Appeals", category: "Government", subcategory: "Courts", url: "https://appeals.cuyahogacounty.gov/", description: "Ohio's Eighth District appellate court, serving Cuyahoga County alone, at 1 West Lakeside Avenue #202." },
  { name: "Cuyahoga County Board of Health", category: "Government", subcategory: "Health", url: "https://ccbh.net/", description: "The health district for most county communities, at 5550 Venture Drive in Parma." },
  { name: "Cuyahoga County Planning Commission", category: "Government", subcategory: "Planning", url: "https://www.countyplanning.us/", description: "County planning agency in Cleveland, advancing 'social, economic, and environmental health through equitable community planning.'" },
  { name: "Cuyahoga Soil & Water Conservation District", category: "Government", subcategory: "Public Works", url: "https://www.cuyahogaswcd.org/", description: "The county's conservation district — 'your local leader in urban conservation.'" },
  { name: "Cuyahoga County Solid Waste District", category: "Government", subcategory: "Public Works", url: "https://cuyahogarecycles.org/", description: "The county's recycling and sustainable-materials authority." },
  { name: "ADAMHS Board of Cuyahoga County", category: "Government", subcategory: "Health", url: "https://www.adamhscc.org/", description: "Plans, funds and monitors the county's public mental-health and addiction-recovery services." },
  { name: "Greater Cleveland RTA", category: "Government", subcategory: "Transit", url: "https://www.riderta.com/", description: "The regional transit authority — bus, rapid rail and trolley — headquartered at 1240 West 6th Street in Cleveland." },
  { name: "Port of Cleveland", category: "Government", subcategory: "Planning", url: "https://www.portofcleveland.com/", description: "The Cleveland-Cuyahoga County Port Authority, the local agency devoted to jobs and economic vitality on the lakefront." },
  { name: "NOACA", category: "Government", subcategory: "Planning", url: "https://www.noaca.org/", description: "Northeast Ohio Areawide Coordinating Agency, the five-county metropolitan planning organization, at 1299 Superior Avenue." },

  // ---------- Government: cities ----------
  { name: "City of Cleveland", category: "Government", subcategory: "City", url: "https://www.clevelandohio.gov/", description: "County seat and Ohio's second-largest city; City Hall at 601 Lakeside Avenue." },
  { name: "City of Bay Village", category: "Government", subcategory: "City", url: "https://www.cityofbayvillage.com/", description: "Lakefront city on the county's western edge." },
  { name: "City of Beachwood", category: "Government", subcategory: "City", url: "https://www.beachwoodohio.com/", description: "Eastern-suburb city; City Hall at 25325 Fairmount Boulevard." },
  { name: "City of Bedford", category: "Government", subcategory: "City", url: "https://www.bedfordoh.gov/", description: "City offices at 165 Center Road. Distinct from neighbouring Bedford Heights." },
  { name: "City of Bedford Heights", category: "Government", subcategory: "City", url: "https://www.bedfordheights.gov/", description: "City Hall at 5661 Perkins Road. Distinct from neighbouring Bedford." },
  { name: "City of Berea", category: "Government", subcategory: "City", url: "https://www.cityofberea.org/", description: "Home of Baldwin Wallace University; offices at 11 Berea Commons." },
  { name: "City of Brecksville", category: "Government", subcategory: "City", url: "https://www.brecksville.oh.us/", description: "Southern city at the gateway to Cuyahoga Valley National Park." },
  { name: "City of Broadview Heights", category: "Government", subcategory: "City", url: "https://www.broadview-heights.org/", description: "Southern-suburb city between Brecksville and North Royalton." },
  { name: "City of Brook Park", category: "Government", subcategory: "City", url: "https://www.cityofbrookpark.com/", description: "City surrounding much of Cleveland Hopkins airport; civic center at 17400 Holland Road." },
  { name: "City of Brooklyn", category: "Government", subcategory: "City", url: "https://www.brooklynohio.gov/", description: "City in the heart of the county. Distinct from the village of Brooklyn Heights." },
  { name: "City of East Cleveland", category: "Government", subcategory: "City", url: "https://www.eastcleveland.org/", description: "Ohio's first suburb, east of University Circle. A separate city from Cleveland." },
  { name: "City of Euclid", category: "Government", subcategory: "City", url: "https://www.cityofeuclid.gov/", description: "Lakefront city at 585 East 222nd Street; the old cityofeuclid.com address redirects here." },
  { name: "City of Fairview Park", category: "Government", subcategory: "City", url: "https://www.fairviewpark.org/", description: "Western-suburb city at 20777 Lorain Road." },
  { name: "City of Garfield Heights", category: "Government", subcategory: "City", url: "https://www.garfieldhts.org/", description: "City offices at 5407 Turney Road." },
  { name: "City of Highland Heights", category: "Government", subcategory: "City", url: "https://www.highlandhts.com/", description: "Northeastern-suburb city near the Lake County line." },
  { name: "City of Independence", category: "Government", subcategory: "City", url: "https://www.independenceohio.org/", description: "I-77 corridor business hub; City Hall at 6800 Brecksville Road." },
  { name: "City of Lakewood", category: "Government", subcategory: "City", url: "https://lakewoodoh.gov/", description: "The county's densest city, at 12650 Detroit Avenue on the lakefront." },
  { name: "City of Lyndhurst", category: "Government", subcategory: "City", url: "https://www.lyndhurstohio.gov/", description: "City Hall at 5301 Mayfield Road. The old lyndhurst-oh.com site is still live but stale — this is the current address." },
  { name: "City of Maple Heights", category: "Government", subcategory: "City", url: "https://mapleheightsohio.gov/", description: "City Hall at 5353 Lee Road." },
  { name: "Village of Mayfield", category: "Government", subcategory: "Village", url: "https://www.mayfieldvillage.com/", description: "Village at 6622 Wilson Mills Road. Distinct from the city of Mayfield Heights next door." },
  { name: "City of North Olmsted", category: "Government", subcategory: "City", url: "https://www.north-olmsted.com/", description: "Western city; City Hall at 5200 Dover Center Road." },
  { name: "City of North Royalton", category: "Government", subcategory: "City", url: "https://www.northroyalton.gov/", description: "Southern city; northroyalton.org redirects to this .gov address." },
  { name: "City of Olmsted Falls", category: "Government", subcategory: "City", url: "https://www.olmstedfalls.org/", description: "City at 26100 Bagley Road. Distinct from surrounding Olmsted Township." },
  { name: "City of Parma", category: "Government", subcategory: "City", url: "https://www.cityofparma-oh.gov/", description: "The county's second-largest city; City Hall at 6611 Ridge Road." },
  { name: "City of Parma Heights", category: "Government", subcategory: "City", url: "https://www.parmaheightsoh.gov/", description: "City Hall at 6281 Pearl Road. A separate city from Parma." },
  { name: "City of Pepper Pike", category: "Government", subcategory: "City", url: "https://www.pepperpike.org/", description: "Eastern residential city at 28000 Shaker Boulevard." },
  { name: "City of Richmond Heights", category: "Government", subcategory: "City", url: "https://www.richmondheightsohio.org/", description: "Northeastern-suburb city." },
  { name: "City of Rocky River", category: "Government", subcategory: "City", url: "https://www.rockyriverohio.gov/", description: "Lakefront city; municipal campus at 21012 Hilliard Boulevard. The old rrcity.com redirects here." },
  { name: "City of Seven Hills", category: "Government", subcategory: "City", url: "https://www.sevenhillsohio.org/", description: "Southern-suburb city under Mayor Anthony D. Biasiotta." },
  { name: "City of Shaker Heights", category: "Government", subcategory: "City", url: "https://www.shakerheightsoh.gov/", description: "Historic planned city at 3400 Lee Road. Beware shakeronline.com, which still serves the previous decade's content." },
  { name: "City of Solon", category: "Government", subcategory: "City", url: "https://www.solonohio.org/", description: "Southeastern city and industrial hub." },
  { name: "City of South Euclid", category: "Government", subcategory: "City", url: "https://www.cityofsoutheuclid.com/", description: "Eastern-suburb city — 'Come Together & Thrive.'" },
  { name: "City of Strongsville", category: "Government", subcategory: "City", url: "https://www.strongsville.org/", description: "The county's southwestern corner; City Hall at 16099 Foltz Parkway." },
  { name: "City of University Heights", category: "Government", subcategory: "City", url: "https://www.universityheights.com/", description: "Home of John Carroll University." },
  { name: "City of Warrensville Heights", category: "Government", subcategory: "City", url: "https://www.cityofwarrensville.com/", description: "Municipal center at 4743 Richmond Road." },
  { name: "City of Westlake", category: "Government", subcategory: "City", url: "https://www.cityofwestlake.org/", description: "Western city; City Hall at 27700 Hilliard Boulevard." },

  // ---------- Government: villages & townships ----------
  { name: "Village of Bentleyville", category: "Government", subcategory: "Village", url: "https://www.villageofbentleyville.org/", description: "Chagrin Valley village founded in 1831." },
  { name: "Village of Bratenahl", category: "Government", subcategory: "Village", url: "https://www.bratenahl.org/", description: "Lakefront village enclave surrounded by Cleveland." },
  { name: "Village of Brooklyn Heights", category: "Government", subcategory: "Village", url: "https://www.brooklynhts.org/", description: "Small village once known as the 'Greenhouse Capital of America.' Distinct from the city of Brooklyn." },
  { name: "Village of Chagrin Falls", category: "Government", subcategory: "Village", url: "https://www.chagrinfallsoh.gov/", description: "Village at the falls, 21 West Washington Street. Distinct from the tiny township of the same name." },
  { name: "Chagrin Falls Township", category: "Government", subcategory: "Township", url: "https://chagrinfallstownship.org/", description: "One of the county's two townships — a few dozen parcels governed by three trustees from the 1848 Township Hall at 83 North Main Street." },
  { name: "Village of Cuyahoga Heights", category: "Government", subcategory: "Village", url: "https://www.cuyahogaheights.gov/", description: "Industrial-valley village at 4863 East 71st Street." },
  { name: "Village of Gates Mills", category: "Government", subcategory: "Village", url: "https://www.gatesmillsvillage.com/", description: "Chagrin River village at 1470 Chagrin River Road." },
  { name: "Village of Glenwillow", category: "Government", subcategory: "Village", url: "https://glenwillow-oh.gov/", description: "Southeastern village of about 1,000 residents and 80+ businesses, at 29555 Pettibone Road." },
  { name: "Village of Highland Hills", category: "Government", subcategory: "Village", url: "https://www.vhhohio.org/", description: "Village near I-271 on the county's east side." },
  { name: "Village of Hunting Valley", category: "Government", subcategory: "Village", url: "https://www.huntingvalley.net/", description: "Eight square miles in the Chagrin River valley, incorporated 1924; the village straddles the Cuyahoga/Geauga line." },
  { name: "Village of Linndale", category: "Government", subcategory: "Village", url: "https://www.linndalevillage-oh.gov/", description: "Ohio's smallest municipalities by area have nothing on Linndale — a few blocks inside Cleveland's west side." },
  { name: "Village of Moreland Hills", category: "Government", subcategory: "Village", url: "https://www.morelandhills.com/", description: "Chagrin Valley village, birthplace of President James A. Garfield." },
  { name: "Village of Newburgh Heights", category: "Government", subcategory: "Village", url: "https://www.newburgh-oh.gov/", description: "Village established in 1904 at 3801 Harvard Avenue." },
  { name: "Village of North Randall", category: "Government", subcategory: "Village", url: "https://northrandall.com/", description: "Village at 4610 Northfield Road, once home of Randall Park Mall." },
  { name: "Village of Oakwood", category: "Government", subcategory: "Village", url: "https://www.oakwoodvillageoh.com/", description: "Southeastern village at 24800 Broadway Avenue." },
  { name: "Olmsted Township", category: "Government", subcategory: "Township", url: "https://www.olmstedtownship.org/", description: "The larger of the county's two townships, governed by an elected board of trustees." },
  { name: "Village of Orange", category: "Government", subcategory: "Village", url: "https://www.orangevillage.com/", description: "Village at 4600 Lander Road — the Cuyahoga County Orange, not Delaware County's Orange Township." },
  { name: "Village of Valley View", category: "Government", subcategory: "Village", url: "https://www.valleyview.net/", description: "Cuyahoga Valley village at 6848 Hathaway Road." },
  { name: "Village of Walton Hills", category: "Government", subcategory: "Village", url: "https://www.waltonhillsohio.gov/", description: "Southeastern village at 7595 Walton Road." },
  { name: "Village of Woodmere", category: "Government", subcategory: "Village", url: "https://www.woodmerevillage.com/", description: "Quarter-square-mile village on Chagrin Boulevard." },

  // ---------- Education ----------
  { name: "Cleveland Metropolitan School District", category: "Education", subcategory: "K-12", url: "https://www.clevelandmetroschools.org/", description: "The state's second-largest district, serving more than 34,000 Cleveland students." },
  { name: "Parma City School District", category: "Education", subcategory: "K-12", url: "https://www.parmacityschools.org/", description: "Serves Parma, Parma Heights and Seven Hills from 7377 Chateau Drive." },
  { name: "Lakewood City Schools", category: "Education", subcategory: "K-12", url: "https://www.lakewoodcityschools.org/", description: "District offices at 13701 Lake Avenue in Lakewood." },
  { name: "Cleveland Heights-University Heights Schools", category: "Education", subcategory: "K-12", url: "https://www.chuh.org/", description: "The CH-UH district serving both Heights cities." },
  { name: "Shaker Heights Schools", category: "Education", subcategory: "K-12", url: "https://www.shaker.org/", description: "The historic Shaker Heights city district." },
  { name: "Solon City Schools", category: "Education", subcategory: "K-12", url: "https://www.solonschools.org/", description: "Consistently one of Ohio's top-rated districts, at 33600 Inwood Road." },
  { name: "Cuyahoga Community College", category: "Education", subcategory: "Higher Ed", url: "https://www.tri-c.edu/", description: "Tri-C, Ohio's first community college, headquartered at 700 Carnegie Avenue with campuses county-wide." },
  { name: "Cleveland State University", category: "Education", subcategory: "Higher Ed", url: "https://www.csuohio.edu/", description: "Public research university downtown, established 1964." },
  { name: "Case Western Reserve University", category: "Education", subcategory: "Higher Ed", url: "https://case.edu/", description: "Private research university at 10900 Euclid Avenue in University Circle." },
  { name: "Baldwin Wallace University", category: "Education", subcategory: "Higher Ed", url: "https://www.bw.edu/", description: "Private university at 275 Eastland Road in Berea." },
  { name: "John Carroll University", category: "Education", subcategory: "Higher Ed", url: "https://www.jcu.edu/", description: "Jesuit university at 1 John Carroll Boulevard in University Heights." },
  { name: "Cuyahoga County Public Library", category: "Education", subcategory: "Libraries", url: "https://cuyahogalibrary.org/", description: "The suburban county system, repeatedly rated among the best public libraries in the nation." },

  // ---------- Health ----------
  { name: "Cleveland Clinic", category: "Health", subcategory: "Hospitals", url: "https://my.clevelandclinic.org/", description: "The county's largest employer and one of the world's leading health systems, based on Euclid Avenue." },
  { name: "University Hospitals", category: "Health", subcategory: "Hospitals", url: "https://www.uhhospitals.org/", description: "Cleveland-based health system anchored at UH Cleveland Medical Center in University Circle." },
  { name: "The MetroHealth System", category: "Health", subcategory: "Hospitals", url: "https://www.metrohealth.org/", description: "The county's public health system and safety-net hospital, at 2500 MetroHealth Drive." },
  { name: "VA Northeast Ohio Healthcare System", category: "Health", subcategory: "Hospitals", url: "https://www.va.gov/northeast-ohio-health-care/", description: "Veterans care anchored by the Louis Stokes Cleveland VA Medical Center at 10701 East Boulevard." },

  // ---------- Business & Economy ----------
  { name: "Greater Cleveland Partnership", category: "Business & Economy", subcategory: "Chambers", url: "https://www.greatercle.com/", description: "One of the nation's largest metropolitan chambers of commerce, at 1240 Huron Road East." },
  { name: "Team NEO", category: "Business & Economy", subcategory: "Development", url: "https://www.teamneo.org/", description: "The regional economic-development organization for the 18-county Cleveland Plus region." },
  { name: "Cuyahoga Land Bank", category: "Business & Economy", subcategory: "Development", url: "https://cuyahogalandbank.org/", description: "The Cuyahoga County Land Reutilization Corporation — vacant-property recovery and neighborhood stabilization." },

  // ---------- Community & Social ----------
  { name: "Cleveland Foundation", category: "Community & Social", subcategory: "Philanthropy", url: "https://www.clevelandfoundation.org/", description: "The world's first community foundation (1914), at 6601 Euclid Avenue." },
  { name: "Greater Cleveland Food Bank", category: "Community & Social", subcategory: "Services", url: "https://www.greaterclevelandfoodbank.org/", description: "Northeast Ohio's largest hunger-relief organization." },
  { name: "Cuyahoga Metropolitan Housing Authority", category: "Community & Social", subcategory: "Housing", url: "https://www.cmha.net/", description: "CMHA, the county's public-housing authority, at 8120 Kinsman Road." },

  // ---------- Recreation & Tourism ----------
  { name: "Cleveland Metroparks", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.clevelandmetroparks.com/", description: "The 'Emerald Necklace' — 18 reservations, lakefront parks, nine golf courses and the Cleveland Metroparks Zoo." },
  { name: "Cuyahoga Valley National Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.nps.gov/cuva/index.htm", description: "Ohio's only national park, along the Cuyahoga River between Cleveland and Akron. Mostly in Summit County; its north end reaches into this county at Brecksville and Valley View." },
  { name: "Rock & Roll Hall of Fame", category: "Recreation & Tourism", subcategory: "Attractions", url: "https://www.rockhall.com/", description: "The lakefront museum and hall of fame on North Coast Harbor." },
  { name: "Playhouse Square", category: "Recreation & Tourism", subcategory: "Arts", url: "https://www.playhousesquare.org/", description: "The largest performing-arts center in the U.S. outside New York." },
  { name: "Cleveland Museum of Art", category: "Recreation & Tourism", subcategory: "Arts", url: "https://www.clevelandart.org/", description: "World-class collection in University Circle; general admission is free." },
  { name: "Cleveland Museum of Natural History", category: "Recreation & Tourism", subcategory: "Attractions", url: "https://www.cmnh.org/", description: "Natural-history museum in University Circle, home of 'Lucy's' discoverer." },
  { name: "Great Lakes Science Center", category: "Recreation & Tourism", subcategory: "Attractions", url: "https://greatscience.com/", description: "Hands-on science museum and NASA Glenn Visitor Center at 601 Erieside Avenue on the lakefront." },
  { name: "West Side Market", category: "Recreation & Tourism", subcategory: "Attractions", url: "https://westsidemarket.org/", description: "Cleveland's historic public market (1912) at West 25th and Lorain in Ohio City." },
  { name: "Cleveland Guardians", category: "Recreation & Tourism", subcategory: "Sports", url: "https://www.mlb.com/guardians", description: "Major League Baseball at Progressive Field." },
  { name: "Cleveland Browns", category: "Recreation & Tourism", subcategory: "Sports", url: "https://www.clevelandbrowns.com/", description: "The NFL on the lakefront at Huntington Bank Field." },
  { name: "Cleveland Cavaliers", category: "Recreation & Tourism", subcategory: "Sports", url: "https://www.nba.com/cavaliers", description: "The NBA at Rocket Arena downtown." },

  // ---------- News & Media ----------
  { name: "Signal Cleveland", category: "News & Media", subcategory: "News", url: "https://signalcleveland.org/", description: "Nonprofit local newsroom covering Greater Cleveland news and neighborhoods." },
  { name: "Ideastream Public Media", category: "News & Media", subcategory: "Public Media", url: "https://www.ideastream.org/", description: "Northeast Ohio's public broadcasting home — WVIZ, WKSU and WCLV — at 1375 Euclid Avenue." },
  { name: "Crain's Cleveland Business", category: "News & Media", subcategory: "News", url: "https://www.crainscleveland.com/", description: "Business news covering Northeast Ohio's economy, real estate and health care." },
];
