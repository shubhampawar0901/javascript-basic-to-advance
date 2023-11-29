params = {
    search_val : "keratin treatment"
    
}

let search_arr = params.search_val.split(' ');
let tags_string  = '';
let tags_flag = false;

for(let i = search_arr.length - 1; i >= 0 ; i-- ){

    let index = 0;
    let sub_str ='';
    // this loop creates substrings of given search value
    while( index <= i){
        sub_str += search_arr[index++];
        if(index<=i) sub_str+=' ';
    }
    
    // create OR tags LIKE conditions and insert in tags_string
    if(tags_flag==false){
        tags_string  +=(` tags LIKE '${sub_str}'`);
        tags_flag = true;
    }else{
        tags_string +=(` OR tags LIKE '${sub_str}'`);
    }
    tags_string +=(` OR tags LIKE '${sub_str}%'`);
    tags_string +=(` OR tags LIKE '% ${sub_str} %'`);
    console.log(tags_string)

}

// console.log(tags_string)

