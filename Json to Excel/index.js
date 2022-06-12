const { generateExcel } = require('json5-to-table')
const data = [
   {
      "_id": {
         "$oid": "614eaf5d599ca721e24a1952"
      },
      "sectionData": [
         {
            "data": [
               {
                  "_id": {
                     "$oid": "61573866afe0e5103e43e7ea"
                  },
                  "keyName": "First Name",
                  "contentType": "text",
                  "valueName": "Darshan",
                  "isActive": true
               },
               {
                  "_id": {
                     "$oid": "6157429cafe0e5103e43e7eb"
                  },
                  "keyName": "Last Name",
                  "contentType": "text",
                  "valueName": "Sudake",
                  "isActive": true
               },
               {
                  "_id": {
                     "$oid": "61574479828c9f1ef7ee5731"
                  },
                  "keyName": "Email",
                  "contentType": "email",
                  "valueName": "darshan@imatmi.com",
                  "isActive": true
               },
               {
                  "_id": {
                     "$oid": "61613282a0850c3f80b9c296"
                  },
                  "keyName": "Contact Number",
                  "contentType": "text",
                  "valueName": "1234567890",
                  "isActive": true
               },
               {
                  "_id": {
                     "$oid": "616309e3e534d70f3ee4be30"
                  },
                  "keyName": "Address",
                  "contentType": "textarea",
                  "valueName": "asdfghjkl",
                  "isActive": true
               },
               {
                  "_id": {
                     "$oid": "616c10ba31d3b40cb104f545"
                  },
                  "keyName": "Birth Date",
                  "contentType": "date",
                  "valueName": "2021-10-16T18:30:00.000Z",
                  "isActive": true
               }
            ],
            "path": [

            ],
            "_id": {
               "$oid": "614eaf5d599ca721e24a1951"
            },
            "sectionName": "Basic Information",
            "isActive": true,
            "parentId": "root"
         },
         {
            "data": [

            ],
            "path": [
               "root"
            ],
            "_id": {
               "$oid": "614eafce599ca721e24a1953"
            },
            "sectionName": "Work Experience",
            "isActive": true,
            "parentId": "root"
         },
         {
            "data": [
               {
                  "_id": {
                     "$oid": "615744e1828c9f1ef7ee5732"
                  },
                  "keyName": "Description",
                  "contentType": "textarea",
                  "valueName": "Worked on XYZ Project...",
                  "isActive": true
               },
               {
                  "_id": {
                     "$oid": "6157463aed94680e03fe7f61"
                  },
                  "keyName": "Years of Experience",
                  "contentType": "number",
                  "valueName": "2",
                  "isActive": true
               },
               {
                  "_id": {
                     "$oid": "616c383c31d3b40cb104f546"
                  },
                  "keyName": "First Name",
                  "contentType": "text",
                  "valueName": "",
                  "isActive": false
               }
            ],
            "path": [
               "root",
               "614eafce599ca721e24a1953"
            ],
            "_id": {
               "$oid": "614ebb04599ca721e24a1954"
            },
            "sectionName": "ABC Organization",
            "isActive": true,
            "parentId": "614eafce599ca721e24a1953"
         },
         {
            "data": [

            ],
            "path": [
               "root"
            ],
            "_id": {
               "$oid": "616309d0e534d70f3ee4be2f"
            },
            "sectionName": "Education",
            "isActive": true,
            "parentId": "root"
         },
         {
            "data": [

            ],
            "path": [
               "root",
               "614eaf5d599ca721e24a1951"
            ],
            "_id": {
               "$oid": "61630a18e534d70f3ee4be31"
            },
            "sectionName": "new section",
            "isActive": false,
            "parentId": "614eaf5d599ca721e24a1951"
         },
         {
            "data": [

            ],
            "path": [
               "root",
               "614eafce599ca721e24a1953",
               "614ebb04599ca721e24a1954"
            ],
            "_id": {
               "$oid": "61630a26e534d70f3ee4be32"
            },
            "sectionName": "new section",
            "isActive": false,
            "parentId": "614ebb04599ca721e24a1954"
         },
         {
            "data": [

            ],
            "path": [
               "root",
               "614eafce599ca721e24a1953",
               "614ebb04599ca721e24a1954",
               "61630a26e534d70f3ee4be32"
            ],
            "_id": {
               "$oid": "61630a2ae534d70f3ee4be33"
            },
            "sectionName": "new section",
            "isActive": false,
            "parentId": "61630a26e534d70f3ee4be32"
         },
         {
            "data": [

            ],
            "path": [
               "root"
            ],
            "_id": {
               "$oid": "61630acbe534d70f3ee4be34"
            },
            "sectionName": "Work Experience",
            "isActive": false,
            "parentId": "root"
         },
         {
            "data": [

            ],
            "path": [
               "root"
            ],
            "_id": {
               "$oid": "61630ad2e534d70f3ee4be35"
            },
            "sectionName": "new section",
            "isActive": false,
            "parentId": "root"
         },
         {
            "data": [

            ],
            "path": [
               "root",
               "614eafce599ca721e24a1953"
            ],
            "_id": {
               "$oid": "6169704aa1c1c27b3aad9715"
            },
            "sectionName": "Google",
            "isActive": true,
            "parentId": "614eafce599ca721e24a1953"
         },
         {
            "data": [

            ],
            "path": [
               "root",
               "616309d0e534d70f3ee4be2f"
            ],
            "_id": {
               "$oid": "61697075a1c1c27b3aad9716"
            },
            "sectionName": "dgsdg",
            "isActive": false,
            "parentId": "616309d0e534d70f3ee4be2f"
         },
         {
            "data": [

            ],
            "path": [
               "root",
               "616309d0e534d70f3ee4be2f"
            ],
            "_id": {
               "$oid": "61697077a1c1c27b3aad9717"
            },
            "sectionName": "dgsdga",
            "isActive": false,
            "parentId": "616309d0e534d70f3ee4be2f"
         },
         {
            "data": [

            ],
            "path": [
               "root",
               "616309d0e534d70f3ee4be2f",
               "61697077a1c1c27b3aad9717"
            ],
            "_id": {
               "$oid": "6169707da1c1c27b3aad9718"
            },
            "sectionName": "gwdg",
            "isActive": true,
            "parentId": "61697077a1c1c27b3aad9717"
         },
         {
            "data": [

            ],
            "path": [
               "root"
            ],
            "_id": {
               "$oid": "6169708fa1c1c27b3aad9719"
            },
            "sectionName": "Python",
            "isActive": true,
            "parentId": "root"
         },
         {
            "data": [

            ],
            "path": [
               "root",
               "6169708fa1c1c27b3aad9719"
            ],
            "_id": {
               "$oid": "61697098a1c1c27b3aad971a"
            },
            "sectionName": "Learning Basics",
            "isActive": true,
            "parentId": "6169708fa1c1c27b3aad9719"
         },
         {
            "data": [

            ],
            "path": [
               "root",
               "6169708fa1c1c27b3aad9719"
            ],
            "_id": {
               "$oid": "6169709ca1c1c27b3aad971b"
            },
            "sectionName": "Loop",
            "isActive": true,
            "parentId": "6169708fa1c1c27b3aad9719"
         },
         {
            "data": [

            ],
            "path": [
               "root",
               "6169708fa1c1c27b3aad9719"
            ],
            "_id": {
               "$oid": "616970a2a1c1c27b3aad971c"
            },
            "sectionName": "OOPs",
            "isActive": true,
            "parentId": "6169708fa1c1c27b3aad9719"
         },
         {
            "data": [

            ],
            "path": [
               "root",
               "6169708fa1c1c27b3aad9719",
               "616970a2a1c1c27b3aad971c"
            ],
            "_id": {
               "$oid": "616970b3a1c1c27b3aad971d"
            },
            "sectionName": "Inheritance",
            "isActive": true,
            "parentId": "616970a2a1c1c27b3aad971c"
         },
         {
            "data": [

            ],
            "path": [
               "root",
               "6169708fa1c1c27b3aad9719",
               "616970a2a1c1c27b3aad971c"
            ],
            "_id": {
               "$oid": "616970baa1c1c27b3aad971e"
            },
            "sectionName": "Encapsulation",
            "isActive": true,
            "parentId": "616970a2a1c1c27b3aad971c"
         }
      ],
      "userId": "6140d70d20a9932562eb4f65",
      "isActive": true,
      "createdAt": {
         "$date": {
            "$numberLong": "1632546653616"
         }
      },
      "updatedAt": {
         "$date": {
            "$numberLong": "1634482248927"
         }
      },
      "__v": {
         "$numberInt": "0"
      }
   }
]
const schema = [
   {
      title: 'ID', path: '_id', props: [
         { title: 'ID', path: '$oid' }
      ]
   },

   {
      title: 'Section Data', path: 'sectionData', props: [
         {
            title: 'Dta', path: 'data', props: [
               {
                  title: 'ID', path: '_id', props: [
                     { title: 'ID', path: '$oid' }
                  ]
               },

               { title: 'key', path: 'keyName' },
               { title: 'ct', path: 'contentType' },
               { title: 'value', path: 'valueName' },
               { title: 'active', path: 'isActive' }
            ]
         },
         {
            title: 'Id_2', path: '_id', props: [
               { title: 'ID', path: '$oid' }
            ]
         },
         { title: 'Section Name', path: 'sectionName' },
         { title: 'Active ', path: 'isActive' },
         { title: 'parant ID ', path: 'parentId' },
      ]
   }
]

generateExcel(data, schema, { writeTo: './test2.xlsx' })