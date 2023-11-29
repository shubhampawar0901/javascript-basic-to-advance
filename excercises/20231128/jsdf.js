// function asj(params) {
//     async function process_service_provider_list_es(index_i) {
//         if (index_i < subcatids_of_catids_arr.length) {
//             async function subcatids_of_catids_recursive(index_j) {
//                 if (index_j < subcatids_of_catids_arr[index_i].sub_cat_ids.length) {
//                     try {
//                         let param_obj = {
//                             latitude: params.latitude,
//                             longitude: params.longitude,
//                             page_token: params.page_token || 0,
//                             sub_category_id: subcatids_of_catids_arr[index_i].sub_cat_ids[index_j]
//                         }
//                         const resData = await home.service_provider_list_es(param_obj);

//                         for (let i = 0; i < resData.length; i++) {
//                             result.push(resData[i]);
//                         }
//                         subcatids_of_catids_recursive(index_j + 1)
//                     } catch (err) {
//                         console.log(err);
//                         subcatids_of_catids_recursive(index_j + 1)
//                     }
//                 } else {
//                     process_service_provider_list_es(index_i + 1);
//                 }
//             }
//             await subcatids_of_catids_recursive(0);
//         } else {
//             if (result.length >= 0)
//                 resolve({ res: result, code: "1" });
//             // Uncomment the line above to resolve the promise with the result

//             console.log("==================================");
//             console.log(result);
//         }
//     }
//     process_service_provider_list_es(0);
// }
let result = [];
const subcatids_of_catids_arr = [
    {
      cat_id: 3,
      sub_cat_ids: [
         23,  37, 729, 26, 30,
        881,  28, 886, 27, 25,
         24, 740
      ]
    },
    {
      cat_id: 5286,
      sub_cat_ids: [
        7206, 7210, 7180, 7207, 7176, 7185,
        7209, 7205, 7187, 7183, 7199, 7191,
        7200, 7190, 7204, 7195, 7177, 7178,
        7182, 7202, 7194, 7184, 7198, 7186,
        7193, 7197, 7179, 7208, 7188, 7192,
        7189, 7165, 7203, 7181, 7196, 7173,
        7201
      ]
    },
    {
      cat_id: 5722,
      sub_cat_ids: [
        5723, 5776, 5767,
        5786, 5801, 5815,
        5825, 5845, 5863,
        5873, 6403, 5911,
        6404
      ]
    }
  ]
  function asj(params) {
    return new Promise(async (resolve, reject) => {
        async function process_service_provider_list_es(index_i) {
            if (index_i < subcatids_of_catids_arr.length) {
                async function subcatids_of_catids_recursive(index_j) {
                    if (index_j < subcatids_of_catids_arr[index_i].sub_cat_ids.length) {
                        try {
                            let param_obj = {
                                latitude: params.latitude,
                                longitude: params.longitude,
                                page_token: params.page_token || 0,
                                sub_category_id: subcatids_of_catids_arr[index_i].sub_cat_ids[index_j]
                            };
                            const resData = await home.service_provider_list_es(param_obj);

                            for (let i = 0; i < resData.length; i++) {
                                result.push(resData[i]);
                            }
                            subcatids_of_catids_recursive(index_j + 1);
                        } catch (err) {
                            console.log(err);
                            subcatids_of_catids_recursive(index_j + 1);
                        }
                    } else {
                        process_service_provider_list_es(index_i + 1);
                    }
                }
                await subcatids_of_catids_recursive(0);
            } else {
                if (result.length >= 0) {
                    resolve({ res: result, code: "1" });
                }
                console.log("==================================");
                console.log(result);
                // Uncomment the line below to resolve the promise with the result
                resolve({ res: result, code: "1" });

            }
        }
        process_service_provider_list_es(0);
    });
}

let home = {
    service_provider_list_es: async function (params_obj) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(push_obj);
            }, 1000);
        });
    }
};

let push_obj = [
    {
      "id": 210,
      "profile_image": "https://eassyserve-cdn.s3-accelerate.amazonaws.com/user/210.png",
      "first_name": "Clean Bharat",
      "last_name": "Facility Mgnt",
      "location": "Navi Mumbai",
      "latitude": "23.0757",
      "longitude": "72.5265",
      "is_authorise": "false",
      "main_category_id": 5,
      "main_category_name": "eassycare cleaning",
      "sub_category_id": 1022,
      "bio": "clean Bharat Faclity management services",
      "region_raduis": 19,
      "region_longitude": "73.0740001425147",
      "region_latitute": "19.0076492800408",
      "DISTANCE": 22.88,
      "es_sp": "false",
      "rating": 4,
      "price": 250,
      "service_name": "inspection charge",
      "services": [
        {
          "id": 78199,
          "price": 250,
          "service_name": "inspection charge",
          "ratecard_image": "https://eassyserve-cdn.s3-accelerate.amazonaws.com/category/sc_6295.jpg",
          "bg_image": "https://eassyserve-cdn.s3-accelerate.amazonaws.com/category/084561658470861.jpg",
          "strike_price": 250,
          "description": "",
          "ratecard_video": "https://eassyserve-cdn.s3.ap-south-1.amazonaws.com/video/general.mp4",
          "BOGO_text": "Book & Get 1 AC service Free!"
        }
      ],
      "is_favorite": false,
      "review_count": 0
    },
    {
      "id": 222,
      "profile_image": "https://eassyserve-cdn.s3-accelerate.amazonaws.com/user/222.png",
      "first_name": "Royal Customer",
      "last_name": "Services",
      "location": "Thane, nevi mumbai.",
      "latitude": "0",
      "longitude": "0",
      "is_authorise": "false",
      "main_category_id": 5,
      "main_category_name": "eassycare cleaning",
      "sub_category_id": 1022,
      "bio": "ROYAL CUSTOMER SERVICES\nSpecialized technician for all types of appliance repairs and cleaning services.",
      "region_raduis": 16,
      "region_longitude": "72.9771502688527",
      "region_latitute": "19.2192909380400",
      "DISTANCE": 14.43,
      "es_sp": "false",
      "rating": 4,
      "price": 800,
      "service_name": "1",
      "services": [
        {
          "id": 80888,
          "price": 800,
          "service_name": "1",
          "ratecard_image": "https://eassyserve-cdn.s3-accelerate.amazonaws.com/category/sc_6295.jpg",
          "bg_image": "https://eassyserve-cdn.s3-accelerate.amazonaws.com/category/084561658470861.jpg",
          "strike_price": 800,
          "description": "",
          "ratecard_video": "https://eassyserve-cdn.s3.ap-south-1.amazonaws.com/video/general.mp4",
          "BOGO_text": "Book & Get 1 AC service Free!"
        }
      ],
      "is_favorite": false,
      "review_count": 0
    },
    {
      "id": 1014,
      "profile_image": "https://eassyserve-cdn.s3-accelerate.amazonaws.com/user/1014.png",
      "first_name": "Prashant",
      "last_name": "mohite",
      "location": "kajupada,Jogeshwari",
      "latitude": "0",
      "longitude": "0",
      "is_authorise": "false",
      "main_category_id": 731,
      "main_category_name": "eassy pest control",
      "sub_category_id": 1022,
      "bio": "Prashant Mohite \npest control\n\n",
      "region_raduis": 33,
      "region_longitude": "72.8332303091883",
      "region_latitute": "19.1448866210160",
      "DISTANCE": 6.7,
      "es_sp": "false",
      "rating": 3,
      "price": 350,
      "service_name": "consultation charges",
      "services": [
        {
          "id": 80712,
          "price": 850,
          "service_name": "1 bhk ",
          "ratecard_image": "https://eassyserve-cdn.s3-accelerate.amazonaws.com/category/sc_6295.jpg",
          "bg_image": "https://eassyserve-cdn.s3-accelerate.amazonaws.com/category/084561658470861.jpg",
          "strike_price": 850,
          "description": "",
          "ratecard_video": "https://eassyserve-cdn.s3.ap-south-1.amazonaws.com/video/general.mp4",
          "BOGO_text": "Book & Get 1 AC service Free!"
        }
    ]
    },
]

let params = { 
    latitude: 1, 
    longitude: 2, 
    page_token: 1 || 0, 
    // sub_category_id:subcatids_of_catids_arr[index_i].sub_cat_ids[index_j]
}

asj(params);
