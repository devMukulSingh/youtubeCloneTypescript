/** @type {import('next').NextConfig} */


module.exports = {
    images:{
        remotePatterns : [
            {
                protocol:'https',
                hostname:'yt3.ggpht.com',
            },
            {
                protocol:'https',
                hostname:'i.ytimg.com'
            },
            {
                protocol:'https',
                hostname:'yt3.googleusercontent.com'
            },
            {
                protocol:'https',
                hostname : 'www.youtube.com'
            }
        ],
    },
    env:{
        NEXT_PUBLIC_YT_API_KEY1 : 'f27231a138mshf527b836d391828p11433bjsnd64a7a3407e7',
        NEXT_PUBLIC_YT_API_KEY2 : '5508cf87b2msh070f660b663c97bp1a1bc8jsne7b59df17e40',
        NEXT_PUBLIC_YT_API_KEY3 : 'c3fadb704dmshf8f03a38781ffb9p1ae424jsn1d821255ca18',
        NEXT_PUBLIC_YT_API_KEY4 : 'ddbbf33cc3mshb1875e82c653f3bp10f397jsn8db2c2a0b7d9',
        NEXT_PUBLIC_YT_API_KEY5 :  '071d6da942msh7e86e55a9538e46p1f830fjsnc9cc3248d533',
        NEXT_PUBLIC_YT_API_KEY6 :  '9853f99d5cmsh953c0c34426db51p18ce90jsn036dc67ccc0f',

    }
}

