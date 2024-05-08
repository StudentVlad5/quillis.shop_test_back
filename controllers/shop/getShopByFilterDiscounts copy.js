// перевірка по німець. мові
if(selectedLanguage === "de"){
  // перевірка по валюті
  if(currency === "usd"){
      // пошук по search
      if(search !== "null" && search !== "" && search !== undefined){
        if(typeof search === "string"){regsearch.push(new RegExp(search))} else {
        for (let i = 0; i < search.length; i++) {
          regsearch[i] = new RegExp(search[i]);
        }}
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({description_de:{ $in: regsearch }})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        else if(sort === "maxMinPrice"){
        catalog = await Shop.find({description_de:{ $in: regsearch }})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);}
        else {
          catalog = await Shop.find({description_de:{ $in: regsearch }})
          .sort({
            price_usd: 1,
          })
          .limit(limit)
          .skip(skip);}
        let total = await Shop.find({description_de:{ $in: regsearch }}).count();
        return res.status(200).json({ catalog, total });
      }
    
        console.log(man_woman, category, product, sizes)
        // нема фільтрів
    
        if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
        (category == "null" || category == "" || category == undefined) &&
        (product == "null" || product == "" || product == undefined) &&
        (sizes == "null" || sizes == "" || sizes == undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){  
        console.log("нема фільтрів");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        else if(sort === "maxMinPrice"){
        catalog = await Shop.find({price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);}
        else {
          catalog = await Shop.find({price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
          .sort({
            price_usd: 1,
          })
          .limit(limit)
          .skip(skip);}
        let total = await Shop.find({price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
      
          // фільтр по категорії : чоловіче / жіноче / дитяче 
        if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
        (category == "null" || category == "" || category == undefined) &&
        (product == "null" || product == "" || product == undefined) &&
        (sizes == "null" || sizes == "" || sizes == undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){  
        console.log("чоловіче / жіноче / дитяче ");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({man_women_de : man_woman, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);
      }
        else if(sort === "maxMinPrice"){
        catalog = await Shop.find({man_women_de : man_woman, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);
      }
      else {
        catalog = await Shop.find({man_women_de : man_woman, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        let total = await Shop.find({man_women_de : man_woman, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
    
          // фільтр по одежі /взутті/
        if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
        (category !== "null" && category !== "" && category !== undefined) &&
        (product == "null" || product == "" || product == undefined) &&
        (sizes == "null" || sizes == "" || sizes == undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){
          console.log("фільтр по одежі /взутті/ ");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);
      }
      else if(sort === "maxMinPrice"){
        catalog = await Shop.find({category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);
      }
      else {
        catalog = await Shop.find({category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        let total = await Shop.find({category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
          // фільтр по продукція
        if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
        (category == "null" || category == "" || category == undefined) &&
        (product !== "null" && product !== "" && product !== undefined) &&
        (sizes == "null" || sizes == "" || sizes == undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){  
          console.log("фільтр по продукція ");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({product_de : product, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);
      }
      else if(sort === "maxMinPrice"){
        catalog = await Shop.find({product_de : product, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);
      }
      else {
        catalog = await Shop.find({product_de : product, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        let total = await Shop.find({product_de : product, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
          // фільтр по розмірам
        if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
        (category == "null" || category == "" || category == undefined) &&
        (product == "null" || product == "" || product == undefined) &&
        (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){  
          console.log("фільтр по розмірам");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);
      }
      else  if(sort === "maxMinPrice"){
        catalog = await Shop.find({sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);
      }
      else {
        catalog = await Shop.find({sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        let total = await Shop.find({sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
    
          // фільтр по одежі /взуття/ 
          // + чоловік / жінка / дитяче
          
        if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
        (category !== "null" && category !== "" && category !== undefined) &&
        (product == "null" || product == "" || product == undefined) &&
        (sizes == "null" || sizes == "" || sizes == undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){  
          console.log(" по одежі /взуття/ + чоловік / жінка / дитяче ");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({category_de : category, man_women_de : man_woman, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);
      }
      else if(sort === "maxMinPrice"){
        catalog = await Shop.find({category_de : category, man_women_de : man_woman, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);
      }
      else {
        catalog = await Shop.find({category_de : category, man_women_de : man_woman, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        let total = await Shop.find({category_de : category, man_women_de : man_woman, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
          // фільтр по одежі /взуття/ 
          // +product
          
        if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
        (category !== "null" && category !== "" && category !== undefined) &&
        (product !== "null" && product !== "" && product !== undefined) &&
        (sizes == "null" || sizes == "" || sizes == undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){  
          console.log(" по одежі /взуття/ + product");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({product_de : product, category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);
      }
      else if(sort === "maxMinPrice"){
        catalog = await Shop.find({product_de : product, category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);
      }
      else {
        catalog = await Shop.find({product_de : product, category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        let total = await Shop.find({product_de : product, category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
          // фільтр чоловік/жінка  
          // +product
          
        if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
        (category == "null" || category == "" || category == undefined) &&
        (product !== "null" && product !== "" && product !== undefined) &&
        (sizes == "null" || sizes == "" || sizes == undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){  
          console.log(" пофільтр чоловік/жінка   + product");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({product_de : product, man_women_de : man_woman, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);
      }
      else if(sort === "maxMinPrice"){
        catalog = await Shop.find({product_de : product, man_women_de : man_woman, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);
      }
      else {
        catalog = await Shop.find({product_de : product, man_women_de : man_woman, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        let total = await Shop.find({product_de : product, man_women_de : man_woman, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
    
          // фільтр по одежі /взуття/ 
          // +sizes
          
        if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
        (category !== "null" && category !== "" && category !== undefined) &&
        (product == "null" || product == "" || product == undefined) &&
        (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){  
          console.log(" по одежі /взуття/ + sizes");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);
      }
      else if(sort === "maxMinPrice"){
        catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);
      }
      else {
        catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        let total = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
          // фільтр по category 
          // +sizes
          
        if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
        (category !== "null" && category !== "" && category !== undefined) &&
        (product == "null" || product == "" || product == undefined) &&
        (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){        
          console.log(" по category + sizes");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);
      }
      else if(sort === "maxMinPrice"){
        catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);
      }
      else {
        catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        let total = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
          // фільтр по category 
          // +product
          
        if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
        (category !== "null" && category !== "" && category !== undefined) &&
        (product !== "null" && product !== "" && product !== undefined) &&
        (sizes == "null" || sizes == "" || sizes == undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){  
          console.log(" по category + product");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({product_de : product, category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);
      }
      else if(sort === "maxMinPrice"){
        catalog = await Shop.find({product_de : product, category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);
      }
      else {
        catalog = await Shop.find({product_de : product, category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        let total = await Shop.find({product_de : product, category_de : category, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
    
          // фільтр по sizes 
          // +product
          
        if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
        (category == "null" || category == "" || category == undefined) &&
        (product !== "null" && product !== "" && product !== undefined) &&
        (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){  
          console.log(" по sizes + product");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({product_de : product, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);
      }
      else if(sort === "maxMinPrice"){
        catalog = await Shop.find({product_de : product, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);
      }
      else {
        catalog = await Shop.find({product_de : product, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        let total = await Shop.find({product_de : product, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
          // фільтр по одежі /взуття/ 
          // + чоловік / жінка / дитяче
          // + продукція
    
        if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
        (category !== "null" && category !== "" && category !== undefined) &&
        (product !== "null" && product !== "" && product !== undefined) &&
        (sizes == "null" || sizes == "" || sizes == undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){  
          console.log(" ппо одежі /взуття/  + product + чоловік / жінка / дитяче");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({category_de : category, man_women_de : man_woman, product_de: product, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);
      }
      else if(sort === "maxMinPrice"){
        catalog = await Shop.find({category_de : category, man_women_de : man_woman, product_de: product, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);
      }
      else {
        catalog = await Shop.find({category_de : category, man_women_de : man_woman, product_de: product, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        let total = await Shop.find({category_de : category, man_women_de : man_woman, product_de: product, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
    
          // фільтр по одежі /взуття/ 
          // + чоловік / жінка / дитяче
          // + sizes
    
        if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
        (category !== "null" && category !== "" && category !== undefined) &&
        (product == "null" || product == "" || product == undefined) &&
        (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){  
          console.log(" ппо одежі /взуття/  + sizes + чоловік / жінка / дитяче");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({category_de : category, man_women_de : man_woman, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);
      }
      else  if(sort === "maxMinPrice"){
        catalog = await Shop.find({category_de : category, man_women_de : man_woman, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);
      }
      else {
        catalog = await Shop.find({category_de : category, man_women_de : man_woman, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        let total = await Shop.find({category_de : category, man_women_de : man_woman, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
          // product 
          // + чоловік / жінка / дитяче
          // + sizes
    
        if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
        (category == "null" || category == "" || category == undefined) &&
        (product !== "null" && product !== "" && product !== undefined) &&
        (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){  
          console.log(" product  + sizes + чоловік / жінка / дитяче");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({product_de : product, man_women_de : man_woman, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);
      }
        else if(sort === "maxMinPrice"){
        catalog = await Shop.find({product_de : product, man_women_de : man_woman, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);
      }
      else {
        catalog = await Shop.find({product_de : product, man_women_de : man_woman, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        let total = await Shop.find({product_de : product, man_women_de : man_woman, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
          // product 
          // + category
          // + sizes
    
        if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
        (category !== "null" && category !== "" && category !== undefined) &&
        (product !== "null" && product !== "" && product !== undefined) &&
        (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){  
          console.log(" product  + sizes + category");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({product_de : product, category_de : category, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);
      }
      else if(sort === "maxMinPrice"){
        catalog = await Shop.find({product_de : product, category_de : category, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);
      }
      else {
        catalog = await Shop.find({product_de : product, category_de : category, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        let total = await Shop.find({product_de : product, category_de : category, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
          // фільтр по одежі /взуття/ 
          // + чоловік / жінка / дитяче
          // + продукція
          // + розміри
    
        if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
        (category !== "null" && category !== "" && category !== undefined) &&
        (product !== "null" && product !== "" && product !== undefined) &&
        (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
        (search == "null" || search == "" || search == undefined)     
        ){  
          console.log(" +4 фільтри");
        let catalog = {}
        if(sort === "minMaxPrice"){
        catalog = await Shop.find({ man_women_de : man_woman, category_de : category,product_de: product, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);
      }
      else if(sort === "maxMinPrice"){
        catalog = await Shop.find({man_women_de : man_woman, category_de : category, product_de: product, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: -1,
        })
        .limit(limit)
        .skip(skip);
      }
      else {
        catalog = await Shop.find({man_women_de : man_woman, category_de : category,product_de: product, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
        let total = await Shop.find({ man_women_de : man_woman, category_de : category,product_de: product, sizes_de:{ $in: reg }, price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
        return res.status(200).json({ catalog, total });
      }
    
      catalog = await Shop.find({price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_usd: 1,
      })
      .limit(limit)
      .skip(skip);
      total = await Shop.find({price_usd: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
  // FINISH USD
  // EURO
  else if (currency === "euro"){
   // пошук по search
   if(search !== "null" && search !== "" && search !== undefined){
    if(typeof search === "string"){regsearch.push(new RegExp(search))} else {
    for (let i = 0; i < search.length; i++) {
      regsearch[i] = new RegExp(search[i]);
    }}
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({description_de:{ $in: regsearch }})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    else if(sort === "maxMinPrice"){
    catalog = await Shop.find({description_de:{ $in: regsearch }})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);}
    else {
      catalog = await Shop.find({description_de:{ $in: regsearch }})
      .sort({
        price_euro: 1,
      })
      .limit(limit)
      .skip(skip);}
    let total = await Shop.find({description_de:{ $in: regsearch }}).count();
    return res.status(200).json({ catalog, total });
  }
  
    console.log(man_woman, category, product, sizes)
    // нема фільтрів
  
    if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
    (category == "null" || category == "" || category == undefined) &&
    (product == "null" || product == "" || product == undefined) &&
    (sizes == "null" || sizes == "" || sizes == undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){  
    console.log("нема фільтрів");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    else if(sort === "maxMinPrice"){
    catalog = await Shop.find({price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);}
    else {
      catalog = await Shop.find({price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_euro: 1,
      })
      .limit(limit)
      .skip(skip);}
    let total = await Shop.find({price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
  
      // фільтр по категорії : чоловіче / жіноче / дитяче 
    if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
    (category == "null" || category == "" || category == undefined) &&
    (product == "null" || product == "" || product == undefined) &&
    (sizes == "null" || sizes == "" || sizes == undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){  
    console.log("чоловіче / жіноче / дитяче ");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({man_women_de : man_woman, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);
  }
    else if(sort === "maxMinPrice"){
    catalog = await Shop.find({man_women_de : man_woman, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop.find({man_women_de : man_woman, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop.find({man_women_de : man_woman, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
  
      // фільтр по одежі /взутті/
    if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
    (category !== "null" && category !== "" && category !== undefined) &&
    (product == "null" || product == "" || product == undefined) &&
    (sizes == "null" || sizes == "" || sizes == undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){
      console.log("фільтр по одежі /взутті/ ");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop.find({category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop.find({category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop.find({category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
      // фільтр по продукція
    if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
    (category == "null" || category == "" || category == undefined) &&
    (product !== "null" && product !== "" && product !== undefined) &&
    (sizes == "null" || sizes == "" || sizes == undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){  
      console.log("фільтр по продукція ");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({product_de : product, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop.find({product_de : product, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop.find({product_de : product, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop.find({product_de : product, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
      // фільтр по розмірам
    if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
    (category == "null" || category == "" || category == undefined) &&
    (product == "null" || product == "" || product == undefined) &&
    (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){  
      console.log("фільтр по розмірам");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else  if(sort === "maxMinPrice"){
    catalog = await Shop.find({sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop.find({sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop.find({sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
  
      // фільтр по одежі /взуття/ 
      // + чоловік / жінка / дитяче
      
    if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
    (category !== "null" && category !== "" && category !== undefined) &&
    (product == "null" || product == "" || product == undefined) &&
    (sizes == "null" || sizes == "" || sizes == undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){  
      console.log(" по одежі /взуття/ + чоловік / жінка / дитяче ");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({category_de : category, man_women_de : man_woman, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop.find({category_de : category, man_women_de : man_woman, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop.find({category_de : category, man_women_de : man_woman, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop.find({category_de : category, man_women_de : man_woman, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
      // фільтр по одежі /взуття/ 
      // +product
      
    if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
    (category !== "null" && category !== "" && category !== undefined) &&
    (product !== "null" && product !== "" && product !== undefined) &&
    (sizes == "null" || sizes == "" || sizes == undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){  
      console.log(" по одежі /взуття/ + product");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({product_de : product, category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop.find({product_de : product, category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop.find({product_de : product, category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop.find({product_de : product, category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
      // фільтр чоловік/жінка  
      // +product
      
    if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
    (category == "null" || category == "" || category == undefined) &&
    (product !== "null" && product !== "" && product !== undefined) &&
    (sizes == "null" || sizes == "" || sizes == undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){  
      console.log(" пофільтр чоловік/жінка   + product");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({product_de : product, man_women_de : man_woman, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop.find({product_de : product, man_women_de : man_woman, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop.find({product_de : product, man_women_de : man_woman, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop.find({product_de : product, man_women_de : man_woman, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
  
      // фільтр по одежі /взуття/ 
      // +sizes
      
    if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
    (category !== "null" && category !== "" && category !== undefined) &&
    (product == "null" || product == "" || product == undefined) &&
    (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){  
      console.log(" по одежі /взуття/ + sizes");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
      // фільтр по category 
      // +sizes
      
    if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
    (category !== "null" && category !== "" && category !== undefined) &&
    (product == "null" || product == "" || product == undefined) &&
    (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){        
      console.log(" по category + sizes");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
      // фільтр по category 
      // +product
      
    if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
    (category !== "null" && category !== "" && category !== undefined) &&
    (product !== "null" && product !== "" && product !== undefined) &&
    (sizes == "null" || sizes == "" || sizes == undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){  
      console.log(" по category + product");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({product_de : product, category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop.find({product_de : product, category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop.find({product_de : product, category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop.find({product_de : product, category_de : category, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
  
      // фільтр по sizes 
      // +product
      
    if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
    (category == "null" || category == "" || category == undefined) &&
    (product !== "null" && product !== "" && product !== undefined) &&
    (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){  
      console.log(" по sizes + product");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({product_de : product, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop.find({product_de : product, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop.find({product_de : product, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop.find({product_de : product, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
      // фільтр по одежі /взуття/ 
      // + чоловік / жінка / дитяче
      // + продукція
  
    if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
    (category !== "null" && category !== "" && category !== undefined) &&
    (product !== "null" && product !== "" && product !== undefined) &&
    (sizes == "null" || sizes == "" || sizes == undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){  
      console.log(" ппо одежі /взуття/  + product + чоловік / жінка / дитяче");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({category_de : category, man_women_de : man_woman, product_de: product, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop.find({category_de : category, man_women_de : man_woman, product_de: product, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop.find({category_de : category, man_women_de : man_woman, product_de: product, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop.find({category_de : category, man_women_de : man_woman, product_de: product, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
  
      // фільтр по одежі /взуття/ 
      // + чоловік / жінка / дитяче
      // + sizes
  
    if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
    (category !== "null" && category !== "" && category !== undefined) &&
    (product == "null" || product == "" || product == undefined) &&
    (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){  
      console.log(" ппо одежі /взуття/  + sizes + чоловік / жінка / дитяче");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({category_de : category, man_women_de : man_woman, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else  if(sort === "maxMinPrice"){
    catalog = await Shop.find({category_de : category, man_women_de : man_woman, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop.find({category_de : category, man_women_de : man_woman, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop.find({category_de : category, man_women_de : man_woman, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
      // product 
      // + чоловік / жінка / дитяче
      // + sizes
  
    if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
    (category == "null" || category == "" || category == undefined) &&
    (product !== "null" && product !== "" && product !== undefined) &&
    (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){  
      console.log(" product  + sizes + чоловік / жінка / дитяче");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({product_de : product, man_women_de : man_woman, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);
  }
    else if(sort === "maxMinPrice"){
    catalog = await Shop.find({product_de : product, man_women_de : man_woman, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop.find({product_de : product, man_women_de : man_woman, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop.find({product_de : product, man_women_de : man_woman, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
      // product 
      // + category
      // + sizes
  
    if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
    (category !== "null" && category !== "" && category !== undefined) &&
    (product !== "null" && product !== "" && product !== undefined) &&
    (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){  
      console.log(" product  + sizes + category");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({product_de : product, category_de : category, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop.find({product_de : product, category_de : category, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop.find({product_de : product, category_de : category, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop.find({product_de : product, category_de : category, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
      // фільтр по одежі /взуття/ 
      // + чоловік / жінка / дитяче
      // + продукція
      // + розміри
  
    if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
    (category !== "null" && category !== "" && category !== undefined) &&
    (product !== "null" && product !== "" && product !== undefined) &&
    (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
    (search == "null" || search == "" || search == undefined)     
    ){  
      console.log(" +4 фільтри");
    let catalog = {}
    if(sort === "minMaxPrice"){
    catalog = await Shop.find({ man_women_de : man_woman, category_de : category,product_de: product, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop.find({man_women_de : man_woman, category_de : category, product_de: product, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop.find({man_women_de : man_woman, category_de : category,product_de: product, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop.find({ man_women_de : man_woman, category_de : category,product_de: product, sizes_de:{ $in: reg }, price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
    return res.status(200).json({ catalog, total });
  }
  
  catalog = await Shop.find({price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
  .sort({
    price_euro: 1,
  })
  .limit(limit)
  .skip(skip);
  total = await Shop.find({price_euro: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
  return res.status(200).json({ catalog, total });
  }
  // FINISH EURO
  // UAH
  else {
    // пошук по search
      if(search !== "null" && search !== "" && search !== undefined){
      if(typeof search === "string"){regsearch.push(new RegExp(search))} else {
      for (let i = 0; i < search.length; i++) {
        regsearch[i] = new RegExp(search[i]);
      }}
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({description_de:{ $in: regsearch }})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      else if(sort === "maxMinPrice"){
      catalog = await Shop.find({description_de:{ $in: regsearch }})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);}
      else {
        catalog = await Shop.find({description_de:{ $in: regsearch }})
        .sort({
          price_ua: 1,
        })
        .limit(limit)
        .skip(skip);}
      let total = await Shop.find({description_de:{ $in: regsearch }}).count();
      return res.status(200).json({ catalog, total });
    }
  
      console.log(man_woman, category, product, sizes)
      // нема фільтрів
  
      if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
      (category == "null" || category == "" || category == undefined) &&
      (product == "null" || product == "" || product == undefined) &&
      (sizes == "null" || sizes == "" || sizes == undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){  
      console.log("нема фільтрів");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      else if(sort === "maxMinPrice"){
      catalog = await Shop.find({price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);}
      else {
        catalog = await Shop.find({price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
        .sort({
          price_ua: 1,
        })
        .limit(limit)
        .skip(skip);}
      let total = await Shop.find({price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
    
        // фільтр по категорії : чоловіче / жіноче / дитяче 
      if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
      (category == "null" || category == "" || category == undefined) &&
      (product == "null" || product == "" || product == undefined) &&
      (sizes == "null" || sizes == "" || sizes == undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){  
      console.log("чоловіче / жіноче / дитяче ");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({man_women_de : man_woman, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);
    }
      else if(sort === "maxMinPrice"){
      catalog = await Shop.find({man_women_de : man_woman, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop.find({man_women_de : man_woman, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop.find({man_women_de : man_woman, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
  
        // фільтр по одежі /взутті/
      if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
      (category !== "null" && category !== "" && category !== undefined) &&
      (product == "null" || product == "" || product == undefined) &&
      (sizes == "null" || sizes == "" || sizes == undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){
        console.log("фільтр по одежі /взутті/ ");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop.find({category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop.find({category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop.find({category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
        // фільтр по продукція
      if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
      (category == "null" || category == "" || category == undefined) &&
      (product !== "null" && product !== "" && product !== undefined) &&
      (sizes == "null" || sizes == "" || sizes == undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){  
        console.log("фільтр по продукція ");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({product_de : product, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop.find({product_de : product, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop.find({product_de : product, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop.find({product_de : product, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
        // фільтр по розмірам
      if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
      (category == "null" || category == "" || category == undefined) &&
      (product == "null" || product == "" || product == undefined) &&
      (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){  
        console.log("фільтр по розмірам");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else  if(sort === "maxMinPrice"){
      catalog = await Shop.find({sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop.find({sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop.find({sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
  
        // фільтр по одежі /взуття/ 
        // + чоловік / жінка / дитяче
        
      if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
      (category !== "null" && category !== "" && category !== undefined) &&
      (product == "null" || product == "" || product == undefined) &&
      (sizes == "null" || sizes == "" || sizes == undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){  
        console.log(" по одежі /взуття/ + чоловік / жінка / дитяче ");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({category_de : category, man_women_de : man_woman, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop.find({category_de : category, man_women_de : man_woman, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop.find({category_de : category, man_women_de : man_woman, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop.find({category_de : category, man_women_de : man_woman, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
        // фільтр по одежі /взуття/ 
        // +product
        
      if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
      (category !== "null" && category !== "" && category !== undefined) &&
      (product !== "null" && product !== "" && product !== undefined) &&
      (sizes == "null" || sizes == "" || sizes == undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){  
        console.log(" по одежі /взуття/ + product");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({product_de : product, category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop.find({product_de : product, category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop.find({product_de : product, category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop.find({product_de : product, category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
        // фільтр чоловік/жінка  
        // +product
        
      if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
      (category == "null" || category == "" || category == undefined) &&
      (product !== "null" && product !== "" && product !== undefined) &&
      (sizes == "null" || sizes == "" || sizes == undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){  
        console.log(" пофільтр чоловік/жінка   + product");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({product_de : product, man_women_de : man_woman, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop.find({product_de : product, man_women_de : man_woman, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop.find({product_de : product, man_women_de : man_woman, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop.find({product_de : product, man_women_de : man_woman, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
  
        // фільтр по одежі /взуття/ 
        // +sizes
        
      if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
      (category !== "null" && category !== "" && category !== undefined) &&
      (product == "null" || product == "" || product == undefined) &&
      (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){  
        console.log(" по одежі /взуття/ + sizes");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
        // фільтр по category 
        // +sizes
        
      if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
      (category !== "null" && category !== "" && category !== undefined) &&
      (product == "null" || product == "" || product == undefined) &&
      (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){        
        console.log(" по category + sizes");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop.find({sizes_de:{ $in: reg }, category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
        // фільтр по category 
        // +product
        
      if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
      (category !== "null" && category !== "" && category !== undefined) &&
      (product !== "null" && product !== "" && product !== undefined) &&
      (sizes == "null" || sizes == "" || sizes == undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){  
        console.log(" по category + product");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({product_de : product, category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop.find({product_de : product, category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop.find({product_de : product, category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop.find({product_de : product, category_de : category, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
  
        // фільтр по sizes 
        // +product
        
      if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
      (category == "null" || category == "" || category == undefined) &&
      (product !== "null" && product !== "" && product !== undefined) &&
      (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){  
        console.log(" по sizes + product");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({product_de : product, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop.find({product_de : product, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop.find({product_de : product, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop.find({product_de : product, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
        // фільтр по одежі /взуття/ 
        // + чоловік / жінка / дитяче
        // + продукція
  
      if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
      (category !== "null" && category !== "" && category !== undefined) &&
      (product !== "null" && product !== "" && product !== undefined) &&
      (sizes == "null" || sizes == "" || sizes == undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){  
        console.log(" ппо одежі /взуття/  + product + чоловік / жінка / дитяче");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({category_de : category, man_women_de : man_woman, product_de: product, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop.find({category_de : category, man_women_de : man_woman, product_de: product, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop.find({category_de : category, man_women_de : man_woman, product_de: product, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop.find({category_de : category, man_women_de : man_woman, product_de: product, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
  
        // фільтр по одежі /взуття/ 
        // + чоловік / жінка / дитяче
        // + sizes
  
      if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
      (category !== "null" && category !== "" && category !== undefined) &&
      (product == "null" || product == "" || product == undefined) &&
      (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){  
        console.log(" ппо одежі /взуття/  + sizes + чоловік / жінка / дитяче");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({category_de : category, man_women_de : man_woman, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else  if(sort === "maxMinPrice"){
      catalog = await Shop.find({category_de : category, man_women_de : man_woman, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop.find({category_de : category, man_women_de : man_woman, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop.find({category_de : category, man_women_de : man_woman, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
        // product 
        // + чоловік / жінка / дитяче
        // + sizes
  
      if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
      (category == "null" || category == "" || category == undefined) &&
      (product !== "null" && product !== "" && product !== undefined) &&
      (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){  
        console.log(" product  + sizes + чоловік / жінка / дитяче");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({product_de : product, man_women_de : man_woman, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);
    }
      else if(sort === "maxMinPrice"){
      catalog = await Shop.find({product_de : product, man_women_de : man_woman, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop.find({product_de : product, man_women_de : man_woman, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop.find({product_de : product, man_women_de : man_woman, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
        // product 
        // + category
        // + sizes
  
      if((man_woman == "null" || man_woman == "" || man_woman == undefined) && 
      (category !== "null" && category !== "" && category !== undefined) &&
      (product !== "null" && product !== "" && product !== undefined) &&
      (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){  
        console.log(" product  + sizes + category");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({product_de : product, category_de : category, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop.find({product_de : product, category_de : category, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop.find({product_de : product, category_de : category, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop.find({product_de : product, category_de : category, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
        // фільтр по одежі /взуття/ 
        // + чоловік / жінка / дитяче
        // + продукція
        // + розміри
  
      if((man_woman !== "null" && man_woman !== "" && man_woman !== undefined) && 
      (category !== "null" && category !== "" && category !== undefined) &&
      (product !== "null" && product !== "" && product !== undefined) &&
      (sizes !== "null" && sizes !== "" && sizes !== undefined) &&
      (search == "null" || search == "" || search == undefined)     
      ){  
        console.log(" +4 фільтри");
      let catalog = {}
      if(sort === "minMaxPrice"){
      catalog = await Shop.find({ man_women_de : man_woman, category_de : category,product_de: product, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop.find({man_women_de : man_woman, category_de : category, product_de: product, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop.find({man_women_de : man_woman, category_de : category,product_de: product, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
      .sort({
        price_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop.find({ man_women_de : man_woman, category_de : category,product_de: product, sizes_de:{ $in: reg }, price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
      return res.status(200).json({ catalog, total });
    }
  
    catalog = await Shop.find({price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"})
    .sort({
      price_ua: 1,
    })
    .limit(limit)
    .skip(skip);
    total = await Shop.find({price_ua: { $gte: minPrice, $lte: maxPrice }, status: "discount"}).count();
  return res.status(200).json({ catalog, total });
  }
  // FINISH UAH
  }