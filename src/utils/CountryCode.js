/*
let reg = /\(([^)]+)\)/
let countryCode = []
for(let c of $0.children){
    let temp = c.innerHTML.match(reg)
            console.log(temp&&temp[1])
    countryCode.push({'countryCode': c.getAttribute('value'), 'country': c.innerHTML, 'phoneCode':  temp&&temp[1]})
     
    
// console.log(c.getAttribute('value'),' -> ',c.getAttribute('innerHTML'))
}
*/
let CountryCode = [
  {
    countryCode: "AF",
    country: "Afghanistan 🇦🇫 (+93)",
    phoneCode: "+93",
  },
  {
    countryCode: "AL",
    country: "Albania 🇦🇱 (+355)",
    phoneCode: "+355",
  },
  {
    countryCode: "DZ",
    country: "Algeria 🇩🇿 (+213)",
    phoneCode: "+213",
  },
  {
    countryCode: "AS",
    country: "American Samoa 🇦🇸 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "AD",
    country: "Andorra 🇦🇩 (+376)",
    phoneCode: "+376",
  },
  {
    countryCode: "AO",
    country: "Angola 🇦🇴 (+244)",
    phoneCode: "+244",
  },
  {
    countryCode: "AI",
    country: "Anguilla 🇦🇮 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "AG",
    country: "Antigua &amp; Barbuda 🇦🇬 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "AR",
    country: "Argentina 🇦🇷 (+54)",
    phoneCode: "+54",
  },
  {
    countryCode: "AM",
    country: "Armenia 🇦🇲 (+374)",
    phoneCode: "+374",
  },
  {
    countryCode: "AW",
    country: "Aruba 🇦🇼 (+297)",
    phoneCode: "+297",
  },
  {
    countryCode: "AC",
    country: "Ascension Island 🇦🇨 (+247)",
    phoneCode: "+247",
  },
  {
    countryCode: "AU",
    country: "Australia 🇦🇺 (+61)",
    phoneCode: "+61",
  },
  {
    countryCode: "nil",
    country: "Australian External Territories  (+672)",
    phoneCode: "+672",
  },
  {
    countryCode: "AT",
    country: "Austria 🇦🇹 (+43)",
    phoneCode: "+43",
  },
  {
    countryCode: "AZ",
    country: "Azerbaijan 🇦🇿 (+994)",
    phoneCode: "+994",
  },
  {
    countryCode: "BS",
    country: "Bahamas 🇧🇸 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "BH",
    country: "Bahrain 🇧🇭 (+973)",
    phoneCode: "+973",
  },
  {
    countryCode: "BD",
    country: "Bangladesh 🇧🇩 (+880)",
    phoneCode: "+880",
  },
  {
    countryCode: "BB",
    country: "Barbados 🇧🇧 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "BY",
    country: "Belarus 🇧🇾 (+375)",
    phoneCode: "+375",
  },
  {
    countryCode: "BE",
    country: "Belgium 🇧🇪 (+32)",
    phoneCode: "+32",
  },
  {
    countryCode: "BZ",
    country: "Belize 🇧🇿 (+501)",
    phoneCode: "+501",
  },
  {
    countryCode: "BJ",
    country: "Benin 🇧🇯 (+229)",
    phoneCode: "+229",
  },
  {
    countryCode: "BM",
    country: "Bermuda 🇧🇲 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "BT",
    country: "Bhutan 🇧🇹 (+975)",
    phoneCode: "+975",
  },
  {
    countryCode: "BO",
    country: "Bolivia 🇧🇴 (+591)",
    phoneCode: "+591",
  },
  {
    countryCode: "BA",
    country: "Bosnia &amp; Herzegovina 🇧🇦 (+387)",
    phoneCode: "+387",
  },
  {
    countryCode: "BW",
    country: "Botswana 🇧🇼 (+267)",
    phoneCode: "+267",
  },
  {
    countryCode: "BR",
    country: "Brazil 🇧🇷 (+55)",
    phoneCode: "+55",
  },
  {
    countryCode: "VG",
    country: "British Virgin Islands 🇻🇬 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "BN",
    country: "Brunei 🇧🇳 (+673)",
    phoneCode: "+673",
  },
  {
    countryCode: "BG",
    country: "Bulgaria 🇧🇬 (+359)",
    phoneCode: "+359",
  },
  {
    countryCode: "BF",
    country: "Burkina Faso 🇧🇫 (+226)",
    phoneCode: "+226",
  },
  {
    countryCode: "BI",
    country: "Burundi 🇧🇮 (+257)",
    phoneCode: "+257",
  },
  {
    countryCode: "KH",
    country: "Cambodia 🇰🇭 (+855)",
    phoneCode: "+855",
  },
  {
    countryCode: "CM",
    country: "Cameroon 🇨🇲 (+237)",
    phoneCode: "+237",
  },
  {
    countryCode: "CA",
    country: "Canada 🇨🇦 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "CV",
    country: "Cape Verde 🇨🇻 (+238)",
    phoneCode: "+238",
  },
  {
    countryCode: "KY",
    country: "Cayman Islands 🇰🇾 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "CF",
    country: "Central African Republic 🇨🇫 (+236)",
    phoneCode: "+236",
  },
  {
    countryCode: "TD",
    country: "Chad 🇹🇩 (+235)",
    phoneCode: "+235",
  },
  {
    countryCode: "CL",
    country: "Chile 🇨🇱 (+56)",
    phoneCode: "+56",
  },
  {
    countryCode: "CN",
    country: "China 🇨🇳 (+86)",
    phoneCode: "+86",
  },
  {
    countryCode: "CO",
    country: "Colombia 🇨🇴 (+57)",
    phoneCode: "+57",
  },
  {
    countryCode: "KM",
    country: "Comoros 🇰🇲 (+269)",
    phoneCode: "+269",
  },
  {
    countryCode: "CG",
    country: "Congo - Brazzaville 🇨🇬 (+242)",
    phoneCode: "+242",
  },
  {
    countryCode: "CK",
    country: "Cook Islands 🇨🇰 (+682)",
    phoneCode: "+682",
  },
  {
    countryCode: "CR",
    country: "Costa Rica 🇨🇷 (+506)",
    phoneCode: "+506",
  },
  {
    countryCode: "CI",
    country: "Côte d’Ivoire 🇨🇮 (+225)",
    phoneCode: "+225",
  },
  {
    countryCode: "HR",
    country: "Croatia 🇭🇷 (+385)",
    phoneCode: "+385",
  },
  {
    countryCode: "CU",
    country: "Cuba 🇨🇺 (+53)",
    phoneCode: "+53",
  },
  {
    countryCode: "CY",
    country: "Cyprus 🇨🇾 (+357)",
    phoneCode: "+357",
  },
  {
    countryCode: "CZ",
    country: "Czechia 🇨🇿 (+420)",
    phoneCode: "+420",
  },
  {
    countryCode: "KP",
    country: "North Korea 🇰🇵 (+850)",
    phoneCode: "+850",
  },
  {
    countryCode: "CD",
    country: "Congo - Kinshasa 🇨🇩 (+243)",
    phoneCode: "+243",
  },
  {
    countryCode: "TL",
    country: "Timor-Leste 🇹🇱 (+670)",
    phoneCode: "+670",
  },
  {
    countryCode: "DK",
    country: "Denmark 🇩🇰 (+45)",
    phoneCode: "+45",
  },
  {
    countryCode: "nil",
    country: "Diego Garcia  (+246)",
    phoneCode: "+246",
  },
  {
    countryCode: "DJ",
    country: "Djibouti 🇩🇯 (+253)",
    phoneCode: "+253",
  },
  {
    countryCode: "DM",
    country: "Dominica 🇩🇲 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "DO",
    country: "Dominican Republic 🇩🇴 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "EC",
    country: "Ecuador 🇪🇨 (+593)",
    phoneCode: "+593",
  },
  {
    countryCode: "EG",
    country: "Egypt 🇪🇬 (+20)",
    phoneCode: "+20",
  },
  {
    countryCode: "SV",
    country: "El Salvador 🇸🇻 (+503)",
    phoneCode: "+503",
  },
  {
    countryCode: "GQ",
    country: "Equatorial Guinea 🇬🇶 (+240)",
    phoneCode: "+240",
  },
  {
    countryCode: "ER",
    country: "Eritrea 🇪🇷 (+291)",
    phoneCode: "+291",
  },
  {
    countryCode: "EE",
    country: "Estonia 🇪🇪 (+372)",
    phoneCode: "+372",
  },
  {
    countryCode: "ET",
    country: "Ethiopia 🇪🇹 (+251)",
    phoneCode: "+251",
  },
  {
    countryCode: "FK",
    country: "Falkland Islands 🇫🇰 (+500)",
    phoneCode: "+500",
  },
  {
    countryCode: "FO",
    country: "Faroe Islands 🇫🇴 (+298)",
    phoneCode: "+298",
  },
  {
    countryCode: "FJ",
    country: "Fiji 🇫🇯 (+679)",
    phoneCode: "+679",
  },
  {
    countryCode: "FI",
    country: "Finland 🇫🇮 (+358)",
    phoneCode: "+358",
  },
  {
    countryCode: "FR",
    country: "France 🇫🇷 (+33)",
    phoneCode: "+33",
  },
  {
    countryCode: "GF",
    country: "French Guiana 🇬🇫 (+594)",
    phoneCode: "+594",
  },
  {
    countryCode: "PF",
    country: "French Polynesia 🇵🇫 (+689)",
    phoneCode: "+689",
  },
  {
    countryCode: "GA",
    country: "Gabon 🇬🇦 (+241)",
    phoneCode: "+241",
  },
  {
    countryCode: "GM",
    country: "Gambia 🇬🇲 (+220)",
    phoneCode: "+220",
  },
  {
    countryCode: "GE",
    country: "Georgia 🇬🇪 (+995)",
    phoneCode: "+995",
  },
  {
    countryCode: "DE",
    country: "Germany 🇩🇪 (+49)",
    phoneCode: "+49",
  },
  {
    countryCode: "GH",
    country: "Ghana 🇬🇭 (+233)",
    phoneCode: "+233",
  },
  {
    countryCode: "GI",
    country: "Gibraltar 🇬🇮 (+350)",
    phoneCode: "+350",
  },
  {
    countryCode: "GR",
    country: "Greece 🇬🇷 (+30)",
    phoneCode: "+30",
  },
  {
    countryCode: "GL",
    country: "Greenland 🇬🇱 (+299)",
    phoneCode: "+299",
  },
  {
    countryCode: "GD",
    country: "Grenada 🇬🇩 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "GP",
    country: "Guadeloupe 🇬🇵 (+590)",
    phoneCode: "+590",
  },
  {
    countryCode: "GU",
    country: "Guam 🇬🇺 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "GT",
    country: "Guatemala 🇬🇹 (+502)",
    phoneCode: "+502",
  },
  {
    countryCode: "GN",
    country: "Guinea 🇬🇳 (+224)",
    phoneCode: "+224",
  },
  {
    countryCode: "GW",
    country: "Guinea-Bissau 🇬🇼 (+245)",
    phoneCode: "+245",
  },
  {
    countryCode: "GY",
    country: "Guyana 🇬🇾 (+592)",
    phoneCode: "+592",
  },
  {
    countryCode: "HT",
    country: "Haiti 🇭🇹 (+509)",
    phoneCode: "+509",
  },
  {
    countryCode: "HN",
    country: "Honduras 🇭🇳 (+504)",
    phoneCode: "+504",
  },
  {
    countryCode: "HK",
    country: "Hong Kong SAR China 🇭🇰 (+852)",
    phoneCode: "+852",
  },
  {
    countryCode: "HU",
    country: "Hungary 🇭🇺 (+36)",
    phoneCode: "+36",
  },
  {
    countryCode: "IS",
    country: "Iceland 🇮🇸 (+354)",
    phoneCode: "+354",
  },
  {
    countryCode: "IN",
    country: "India 🇮🇳 (+91)",
    phoneCode: "+91",
  },
  {
    countryCode: "ID",
    country: "Indonesia 🇮🇩 (+62)",
    phoneCode: "+62",
  },
  {
    countryCode: "IR",
    country: "Iran 🇮🇷 (+98)",
    phoneCode: "+98",
  },
  {
    countryCode: "IQ",
    country: "Iraq 🇮🇶 (+964)",
    phoneCode: "+964",
  },
  {
    countryCode: "IE",
    country: "Ireland 🇮🇪 (+353)",
    phoneCode: "+353",
  },
  {
    countryCode: "IL",
    country: "Israel 🇮🇱 (+972)",
    phoneCode: "+972",
  },
  {
    countryCode: "IT",
    country: "Italy 🇮🇹 (+39)",
    phoneCode: "+39",
  },
  {
    countryCode: "JM",
    country: "Jamaica 🇯🇲 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "JP",
    country: "Japan 🇯🇵 (+81)",
    phoneCode: "+81",
  },
  {
    countryCode: "JO",
    country: "Jordan 🇯🇴 (+962)",
    phoneCode: "+962",
  },
  {
    countryCode: "KZ",
    country: "Kazakhstan 🇰🇿 (+7)",
    phoneCode: "+7",
  },
  {
    countryCode: "KE",
    country: "Kenya 🇰🇪 (+254)",
    phoneCode: "+254",
  },
  {
    countryCode: "KI",
    country: "Kiribati 🇰🇮 (+686)",
    phoneCode: "+686",
  },
  {
    countryCode: "KP",
    country: "North Korea 🇰🇵 (+82)",
    phoneCode: "+82",
  },
  {
    countryCode: "KW",
    country: "Kuwait 🇰🇼 (+965)",
    phoneCode: "+965",
  },
  {
    countryCode: "KG",
    country: "Kyrgyzstan 🇰🇬 (+996)",
    phoneCode: "+996",
  },
  {
    countryCode: "LA",
    country: "Laos 🇱🇦 (+856)",
    phoneCode: "+856",
  },
  {
    countryCode: "LV",
    country: "Latvia 🇱🇻 (+371)",
    phoneCode: "+371",
  },
  {
    countryCode: "LB",
    country: "Lebanon 🇱🇧 (+961)",
    phoneCode: "+961",
  },
  {
    countryCode: "LS",
    country: "Lesotho 🇱🇸 (+266)",
    phoneCode: "+266",
  },
  {
    countryCode: "LR",
    country: "Liberia 🇱🇷 (+231)",
    phoneCode: "+231",
  },
  {
    countryCode: "LY",
    country: "Libya 🇱🇾 (+218)",
    phoneCode: "+218",
  },
  {
    countryCode: "LI",
    country: "Liechtenstein 🇱🇮 (+423)",
    phoneCode: "+423",
  },
  {
    countryCode: "LT",
    country: "Lithuania 🇱🇹 (+370)",
    phoneCode: "+370",
  },
  {
    countryCode: "LU",
    country: "Luxembourg 🇱🇺 (+352)",
    phoneCode: "+352",
  },
  {
    countryCode: "MO",
    country: "Macao SAR China 🇲🇴 (+853)",
    phoneCode: "+853",
  },
  {
    countryCode: "MG",
    country: "Madagascar 🇲🇬 (+261)",
    phoneCode: "+261",
  },
  {
    countryCode: "MW",
    country: "Malawi 🇲🇼 (+265)",
    phoneCode: "+265",
  },
  {
    countryCode: "MY",
    country: "Malaysia 🇲🇾 (+60)",
    phoneCode: "+60",
  },
  {
    countryCode: "MV",
    country: "Maldives 🇲🇻 (+960)",
    phoneCode: "+960",
  },
  {
    countryCode: "ML",
    country: "Mali 🇲🇱 (+223)",
    phoneCode: "+223",
  },
  {
    countryCode: "MT",
    country: "Malta 🇲🇹 (+356)",
    phoneCode: "+356",
  },
  {
    countryCode: "MH",
    country: "Marshall Islands 🇲🇭 (+692)",
    phoneCode: "+692",
  },
  {
    countryCode: "MQ",
    country: "Martinique 🇲🇶 (+596)",
    phoneCode: "+596",
  },
  {
    countryCode: "MR",
    country: "Mauritania 🇲🇷 (+222)",
    phoneCode: "+222",
  },
  {
    countryCode: "MU",
    country: "Mauritius 🇲🇺 (+230)",
    phoneCode: "+230",
  },
  {
    countryCode: "YT",
    country: "Mayotte 🇾🇹 (+269)",
    phoneCode: "+269",
  },
  {
    countryCode: "MX",
    country: "Mexico 🇲🇽 (+52)",
    phoneCode: "+52",
  },
  {
    countryCode: "FM",
    country: "Micronesia 🇫🇲 (+691)",
    phoneCode: "+691",
  },
  {
    countryCode: "MD",
    country: "Moldova 🇲🇩 (+373)",
    phoneCode: "+373",
  },
  {
    countryCode: "MC",
    country: "Monaco 🇲🇨 (+377)",
    phoneCode: "+377",
  },
  {
    countryCode: "MN",
    country: "Mongolia 🇲🇳 (+976)",
    phoneCode: "+976",
  },
  {
    countryCode: "MS",
    country: "Montserrat 🇲🇸 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "MA",
    country: "Morocco 🇲🇦 (+212)",
    phoneCode: "+212",
  },
  {
    countryCode: "MZ",
    country: "Mozambique 🇲🇿 (+258)",
    phoneCode: "+258",
  },
  {
    countryCode: "MM",
    country: "Myanmar (Burma) 🇲🇲 (+95)",
    phoneCode: "Burma",
  },
  {
    countryCode: "NA",
    country: "Namibia 🇳🇦 (+264)",
    phoneCode: "+264",
  },
  {
    countryCode: "NR",
    country: "Nauru 🇳🇷 (+674)",
    phoneCode: "+674",
  },
  {
    countryCode: "NP",
    country: "Nepal 🇳🇵 (+977)",
    phoneCode: "+977",
  },
  {
    countryCode: "NL",
    country: "Netherlands 🇳🇱 (+31)",
    phoneCode: "+31",
  },
  {
    countryCode: "BQ",
    country: "Caribbean Netherlands 🇧🇶 (+599)",
    phoneCode: "+599",
  },
  {
    countryCode: "NC",
    country: "New Caledonia 🇳🇨 (+687)",
    phoneCode: "+687",
  },
  {
    countryCode: "NZ",
    country: "New Zealand 🇳🇿 (+64)",
    phoneCode: "+64",
  },
  {
    countryCode: "NI",
    country: "Nicaragua 🇳🇮 (+505)",
    phoneCode: "+505",
  },
  {
    countryCode: "NE",
    country: "Niger 🇳🇪 (+227)",
    phoneCode: "+227",
  },
  {
    countryCode: "NG",
    country: "Nigeria 🇳🇬 (+234)",
    phoneCode: "+234",
  },
  {
    countryCode: "NU",
    country: "Niue 🇳🇺 (+683)",
    phoneCode: "+683",
  },
  {
    countryCode: "MP",
    country: "Northern Mariana Islands 🇲🇵 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "NO",
    country: "Norway 🇳🇴 (+47)",
    phoneCode: "+47",
  },
  {
    countryCode: "OM",
    country: "Oman 🇴🇲 (+968)",
    phoneCode: "+968",
  },
  {
    countryCode: "PK",
    country: "Pakistan 🇵🇰 (+92)",
    phoneCode: "+92",
  },
  {
    countryCode: "PW",
    country: "Palau 🇵🇼 (+680)",
    phoneCode: "+680",
  },
  {
    countryCode: "PA",
    country: "Panama 🇵🇦 (+507)",
    phoneCode: "+507",
  },
  {
    countryCode: "PG",
    country: "Papua New Guinea 🇵🇬 (+675)",
    phoneCode: "+675",
  },
  {
    countryCode: "PY",
    country: "Paraguay 🇵🇾 (+595)",
    phoneCode: "+595",
  },
  {
    countryCode: "PE",
    country: "Peru 🇵🇪 (+51)",
    phoneCode: "+51",
  },
  {
    countryCode: "PH",
    country: "Philippines 🇵🇭 (+63)",
    phoneCode: "+63",
  },
  {
    countryCode: "PL",
    country: "Poland 🇵🇱 (+48)",
    phoneCode: "+48",
  },
  {
    countryCode: "PT",
    country: "Portugal 🇵🇹 (+351)",
    phoneCode: "+351",
  },
  {
    countryCode: "PR",
    country: "Puerto Rico 🇵🇷 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "QA",
    country: "Qatar 🇶🇦 (+974)",
    phoneCode: "+974",
  },
  {
    countryCode: "RE",
    country: "Réunion 🇷🇪 (+262)",
    phoneCode: "+262",
  },
  {
    countryCode: "RO",
    country: "Romania 🇷🇴 (+40)",
    phoneCode: "+40",
  },
  {
    countryCode: "RU",
    country: "Russia 🇷🇺 (+7)",
    phoneCode: "+7",
  },
  {
    countryCode: "RW",
    country: "Rwanda 🇷🇼 (+250)",
    phoneCode: "+250",
  },
  {
    countryCode: "SH",
    country: "St Helena 🇸🇭 (+290)",
    phoneCode: "+290",
  },
  {
    countryCode: "KN",
    country: "St Kitts &amp; Nevis 🇰🇳 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "LC",
    country: "St Lucia 🇱🇨 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "PM",
    country: "St Pierre &amp; Miquelon 🇵🇲 (+508)",
    phoneCode: "+508",
  },
  {
    countryCode: "VC",
    country: "St Vincent &amp; Grenadines 🇻🇨 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "WS",
    country: "Samoa 🇼🇸 (+685)",
    phoneCode: "+685",
  },
  {
    countryCode: "SM",
    country: "San Marino 🇸🇲 (+378)",
    phoneCode: "+378",
  },
  {
    countryCode: "ST",
    country: "São Tomé &amp; Príncipe 🇸🇹 (+239)",
    phoneCode: "+239",
  },
  {
    countryCode: "SA",
    country: "Saudi Arabia 🇸🇦 (+966)",
    phoneCode: "+966",
  },
  {
    countryCode: "SN",
    country: "Senegal 🇸🇳 (+221)",
    phoneCode: "+221",
  },
  {
    countryCode: "RS",
    country: "Serbia 🇷🇸 (+381)",
    phoneCode: "+381",
  },
  {
    countryCode: "SC",
    country: "Seychelles 🇸🇨 (+248)",
    phoneCode: "+248",
  },
  {
    countryCode: "SL",
    country: "Sierra Leone 🇸🇱 (+232)",
    phoneCode: "+232",
  },
  {
    countryCode: "SG",
    country: "Singapore 🇸🇬 (+65)",
    phoneCode: "+65",
  },
  {
    countryCode: "SK",
    country: "Slovakia 🇸🇰 (+421)",
    phoneCode: "+421",
  },
  {
    countryCode: "SI",
    country: "Slovenia 🇸🇮 (+386)",
    phoneCode: "+386",
  },
  {
    countryCode: "SB",
    country: "Solomon Islands 🇸🇧 (+677)",
    phoneCode: "+677",
  },
  {
    countryCode: "SO",
    country: "Somalia 🇸🇴 (+252)",
    phoneCode: "+252",
  },
  {
    countryCode: "ZA",
    country: "South Africa 🇿🇦 (+27)",
    phoneCode: "+27",
  },
  {
    countryCode: "ES",
    country: "Spain 🇪🇸 (+34)",
    phoneCode: "+34",
  },
  {
    countryCode: "LK",
    country: "Sri Lanka 🇱🇰 (+94)",
    phoneCode: "+94",
  },
  {
    countryCode: "SD",
    country: "Sudan 🇸🇩 (+249)",
    phoneCode: "+249",
  },
  {
    countryCode: "SR",
    country: "Suriname 🇸🇷 (+597)",
    phoneCode: "+597",
  },
  {
    countryCode: "SZ",
    country: "Eswatini 🇸🇿 (+268)",
    phoneCode: "+268",
  },
  {
    countryCode: "SE",
    country: "Sweden 🇸🇪 (+46)",
    phoneCode: "+46",
  },
  {
    countryCode: "CH",
    country: "Switzerland 🇨🇭 (+41)",
    phoneCode: "+41",
  },
  {
    countryCode: "SY",
    country: "Syria 🇸🇾 (+963)",
    phoneCode: "+963",
  },
  {
    countryCode: "TJ",
    country: "Tajikistan 🇹🇯 (+992)",
    phoneCode: "+992",
  },
  {
    countryCode: "TZ",
    country: "Tanzania 🇹🇿 (+255)",
    phoneCode: "+255",
  },
  {
    countryCode: "TH",
    country: "Thailand 🇹🇭 (+66)",
    phoneCode: "+66",
  },
  {
    countryCode: "MK",
    country: "North Macedonia 🇲🇰 (+389)",
    phoneCode: "+389",
  },
  {
    countryCode: "TG",
    country: "Togo 🇹🇬 (+228)",
    phoneCode: "+228",
  },
  {
    countryCode: "TK",
    country: "Tokelau 🇹🇰 (+690)",
    phoneCode: "+690",
  },
  {
    countryCode: "TO",
    country: "Tonga 🇹🇴 (+676)",
    phoneCode: "+676",
  },
  {
    countryCode: "TT",
    country: "Trinidad &amp; Tobago 🇹🇹 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "TN",
    country: "Tunisia 🇹🇳 (+216)",
    phoneCode: "+216",
  },
  {
    countryCode: "TR",
    country: "Turkey 🇹🇷 (+90)",
    phoneCode: "+90",
  },
  {
    countryCode: "TM",
    country: "Turkmenistan 🇹🇲 (+993)",
    phoneCode: "+993",
  },
  {
    countryCode: "TC",
    country: "Turks &amp; Caicos Islands 🇹🇨 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "TV",
    country: "Tuvalu 🇹🇻 (+688)",
    phoneCode: "+688",
  },
  {
    countryCode: "UG",
    country: "Uganda 🇺🇬 (+256)",
    phoneCode: "+256",
  },
  {
    countryCode: "UA",
    country: "Ukraine 🇺🇦 (+380)",
    phoneCode: "+380",
  },
  {
    countryCode: "AE",
    country: "United Arab Emirates 🇦🇪 (+971)",
    phoneCode: "+971",
  },
  {
    countryCode: "GB",
    country: "United Kingdom 🇬🇧 (+44)",
    phoneCode: "+44",
  },
  {
    countryCode: "US",
    country: "United States 🇺🇸 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "VI",
    country: "US Virgin Islands 🇻🇮 (+1)",
    phoneCode: "+1",
  },
  {
    countryCode: "UY",
    country: "Uruguay 🇺🇾 (+598)",
    phoneCode: "+598",
  },
  {
    countryCode: "UZ",
    country: "Uzbekistan 🇺🇿 (+998)",
    phoneCode: "+998",
  },
  {
    countryCode: "VU",
    country: "Vanuatu 🇻🇺 (+678)",
    phoneCode: "+678",
  },
  {
    countryCode: "VA",
    country: "Vatican City 🇻🇦 (+379)",
    phoneCode: "+379",
  },
  {
    countryCode: "VA",
    country: "Vatican City 🇻🇦 (+39)",
    phoneCode: "+39",
  },
  {
    countryCode: "VE",
    country: "Venezuela 🇻🇪 (+58)",
    phoneCode: "+58",
  },
  {
    countryCode: "VN",
    country: "Vietnam 🇻🇳 (+84)",
    phoneCode: "+84",
  },
  {
    countryCode: "WF",
    country: "Wallis &amp; Futuna 🇼🇫 (+681)",
    phoneCode: "+681",
  },
  {
    countryCode: "YE",
    country: "Yemen 🇾🇪 (+967)",
    phoneCode: "+967",
  },
  {
    countryCode: "ZM",
    country: "Zambia 🇿🇲 (+260)",
    phoneCode: "+260",
  },
  {
    countryCode: "ZW",
    country: "Zimbabwe 🇿🇼 (+263)",
    phoneCode: "+263",
  },
];

export default CountryCode;
