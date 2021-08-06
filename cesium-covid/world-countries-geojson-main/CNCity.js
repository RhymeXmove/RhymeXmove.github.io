const fs = require('fs');
const cities = require('./cities.json');
const cities2 = require('./CITIES2.json');



// console.log(JSON.stringify(citesLocation));
// console.log(JSON.stringify(locations3));


// let allCountry=[]
//
// function foreach(list) {
//     for (let item of list){
//
//         if (item.c){
//             if (item.lv==="city"){
//                 allCountry.push({
//                     code:item.code,
//                     cn:item.cn,
//                     lv:item.lv,
//                     en:item.en
//                 })
//             }
//             foreach(item.c);
//         }else {
//             if (item.lv==="city"){
//                 allCountry.push({
//                     code:item.code,
//                     cn:item.cn,
//                     lv:item.lv,
//                     en:item.en
//                 })
//             }
//         }
//     }
// }
// const location3 = require('./locations3.json');
// foreach(location3);


//
// try {
//     fs.writeFileSync('./allCity.json', JSON.stringify(allCountry))
// } catch (err) {
//     console.error(err)
// }



// let allCountryLocation=[]
//
// function foreach(list) {
//     for (let country of list.features){
//         allCountryLocation.push({
//             region: country.properties.region,
//             code: country.properties.code,
//             name: country.properties.name,
//             full_name: country.properties.full_name,
//             cname: country.properties.cname,
//             full_cname: country.properties.full_cname,
//             lower_name: country.properties.lower_name,
//             latitude: Number(country.properties.latitude),
//             longitude: Number(country.properties.longitude),
//             geometry:country.geometry
//         })
//     }
// }
// const allCountriesGeojson = require('./allCountriesGeojson.json');
// foreach(allCountriesGeojson);
//
// try {
//     fs.writeFileSync('./allCountryLocation.json', JSON.stringify(allCountryLocation))
// } catch (err) {
//     console.error(err)
// }

//获取中国的全部城市
// let allCNCity=[]
//
// function foreach(list) {
//     for (let item of list){
//         if (item.c && item.code=="CN"){
//             allCNCity.push(item.c)
//         }
//     }
// }
// const location3 = require('./locations3.json');
// foreach(location3);
// try {
//     fs.writeFileSync('./allCNCity.json', JSON.stringify(allCNCity))
// } catch (err) {
//     console.error(err)
// }

// //获取中国的34个一级行政区
// let allCNRegion=[]
//
// function foreach(list) {
//     for (let item of list){
//         if (item.code=="CN"){
//                 for (let region of item.c){
//                     allCNRegion.push({
//                         code: region.code,
//                         cn: region.cn,
//                         en:region.en
//                     })
//                 }
//         }
//
//     }
// }
// const location3 = require('./locations3.json');
// foreach(location3);
// try {
//     fs.writeFileSync('./allCNRegion.json', JSON.stringify(allCNRegion))
// } catch (err) {
//     console.error(err)
// }

//获取中国的34个一级行政区的坐标1
// let allCNRegionConfirm=[]

// let allCNRegionConfirmFull=[]
//
// function foreach(region,location) {
//     for (let regionItem of region){
//         for (let locationItem of location.cities){
//             if (regionItem.en == locationItem.name){
//                 allCNRegionWithLocation.push({
//                     cn: regionItem.cn,
//                     en:regionItem.en,
//                     lng:locationItem.lng,
//                     lat:locationItem.lat
//                 })
//             }
//         }
//     }
// }
// const allCNRegion = require('./allCNRegion.json');
// const citiesLocation = require('./cities4.json');
// foreach(allCNRegion,citiesLocation);
// try {
//     fs.writeFileSync('./allCNRegionConfirm.json', JSON.stringify(allCNRegionConfirm))
// } catch (err) {
//     console.error(err)
// }


// let allCityPosition=[];
// function foreachCity(list) {
//     for (let item of list.RECORDS){
//         for (let item2 of cities2){
//             if (item.name == item2.name){
//                 if (item2.country=="CN"){
//                     allCityPosition.push({
//                         country:item2.country,
//                         name: item.name,
//                         cnname:item.cname,
//                         lat: item2.lat,
//                         lng: item2.lng
//                     })
//                 }
//             }
//         }
//         // allCityPosition.push({
//         //         code:item.code,
//         //         cn:item.cn,
//         //         lv:item.lv,
//         //         en:item.en
//         // })
//         }
//
// }
// const citiesLocation = require('./citiesLocation.json');
// foreachCity(citiesLocation);
//
// try {
//     fs.writeFileSync('./allCityPosition.json', JSON.stringify(allCityPosition))
// } catch (err) {
//     console.error(err)
// }
