const { Shop_ua } = require("../../models");

const getShopByFilter_ua = async (req, res, next) => {
  try {
    const isPagination = req.query.page;
    let {
      man_woman,
      category,
      maxPrice = 5000,
      minPrice = 0,
      product,
      sizes,
      sort,
      search,
      page = 1,
      perPage = 12,
      currency = "ua"
    } = req.query;
    console.log("REQ.PARAMS:", req.params);
    const limit = perPage * 1;
    const skip = perPage * (page - 1);
    let reg = [];
    let regsearch = [];
    
    if(sizes !== "null" && sizes !== "" && sizes !== undefined){
    if(typeof sizes === "string"){reg.push(new RegExp(sizes))} else {
    for (let i = 0; i < sizes.length; i++) {
        reg[i] = new RegExp(sizes[i]);
    }}
  }
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
      catalog = await Shop_ua.find({description:{ $in: regsearch }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      else if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({description:{ $in: regsearch }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);}
      else {
        catalog = await Shop_ua.find({description:{ $in: regsearch }})
        .sort({
          newPrice_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
      let total = await Shop_ua.find({description:{ $in: regsearch }}).count();
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
      catalog = await Shop_ua.find({newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      else if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);}
      else {
        catalog = await Shop_ua.find({newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
        .sort({
          newPrice_usd: 1,
        })
        .limit(limit)
        .skip(skip);}
      let total = await Shop_ua.find({newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
      catalog = await Shop_ua.find({man_women : man_woman, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);
    }
      else if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({man_women : man_woman, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop_ua.find({man_women : man_woman, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop_ua.find({man_women : man_woman, newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
      catalog = await Shop_ua.find({category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop_ua.find({category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop_ua.find({category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
      catalog = await Shop_ua.find({product : product, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({product : product, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop_ua.find({product : product, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop_ua.find({product : product, newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
      catalog = await Shop_ua.find({sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else  if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop_ua.find({sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop_ua.find({sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
      catalog = await Shop_ua.find({category : category, man_women : man_woman, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({category : category, man_women : man_woman, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop_ua.find({category : category, man_women : man_woman, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop_ua.find({category : category, man_women : man_woman, newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
      catalog = await Shop_ua.find({product : product, category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({product : product, category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop_ua.find({product : product, category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop_ua.find({product : product, category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
      catalog = await Shop_ua.find({product : product, man_women : man_woman, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({product : product, man_women : man_woman, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop_ua.find({product : product, man_women : man_woman, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop_ua.find({product : product, man_women : man_woman, newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
      catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
      catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
      catalog = await Shop_ua.find({product : product, category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({product : product, category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop_ua.find({product : product, category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop_ua.find({product : product, category : category, newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
      catalog = await Shop_ua.find({product : product, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({product : product, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop_ua.find({product : product, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop_ua.find({product : product, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
      catalog = await Shop_ua.find({category : category, man_women : man_woman, product: product, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({category : category, man_women : man_woman, product: product, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop_ua.find({category : category, man_women : man_woman, product: product, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop_ua.find({category : category, man_women : man_woman, product: product, newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
      catalog = await Shop_ua.find({category : category, man_women : man_woman, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else  if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({category : category, man_women : man_woman, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop_ua.find({category : category, man_women : man_woman, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop_ua.find({category : category, man_women : man_woman, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
      catalog = await Shop_ua.find({product : product, man_women : man_woman, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);
    }
      else if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({product : product, man_women : man_woman, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop_ua.find({product : product, man_women : man_woman, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop_ua.find({product : product, man_women : man_woman, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
      catalog = await Shop_ua.find({product : product, category : category, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({product : product, category : category, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop_ua.find({product : product, category : category, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop_ua.find({product : product, category : category, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
      catalog = await Shop_ua.find({ man_women : man_woman, category : category,product: product, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);
    }
    else if(sort === "maxMinPrice"){
      catalog = await Shop_ua.find({man_women : man_woman, category : category, product: product, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: -1,
      })
      .limit(limit)
      .skip(skip);
    }
    else {
      catalog = await Shop_ua.find({man_women : man_woman, category : category,product: product, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_usd: 1,
      })
      .limit(limit)
      .skip(skip);}
      let total = await Shop_ua.find({ man_women : man_woman, category : category,product: product, sizes:{ $in: reg }, newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
      return res.status(200).json({ catalog, total });
    }
  
    catalog = await Shop_ua.find({newPrice_usd: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_usd: 1,
    })
    .limit(limit)
    .skip(skip);
    total = await Shop_ua.find({newPrice_usd: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({description:{ $in: regsearch }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  else if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({description:{ $in: regsearch }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);}
  else {
    catalog = await Shop_ua.find({description:{ $in: regsearch }})
    .sort({
      newPrice_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
  let total = await Shop_ua.find({description:{ $in: regsearch }}).count();
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
  catalog = await Shop_ua.find({newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  else if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);}
  else {
    catalog = await Shop_ua.find({newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_euro: 1,
    })
    .limit(limit)
    .skip(skip);}
  let total = await Shop_ua.find({newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({man_women : man_woman, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);
}
  else if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({man_women : man_woman, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);
}
else {
  catalog = await Shop_ua.find({man_women : man_woman, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  let total = await Shop_ua.find({man_women : man_woman, newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);
}
else if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);
}
else {
  catalog = await Shop_ua.find({category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  let total = await Shop_ua.find({category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({product : product, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);
}
else if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({product : product, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);
}
else {
  catalog = await Shop_ua.find({product : product, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  let total = await Shop_ua.find({product : product, newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);
}
else  if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);
}
else {
  catalog = await Shop_ua.find({sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  let total = await Shop_ua.find({sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({category : category, man_women : man_woman, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);
}
else if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({category : category, man_women : man_woman, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);
}
else {
  catalog = await Shop_ua.find({category : category, man_women : man_woman, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  let total = await Shop_ua.find({category : category, man_women : man_woman, newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({product : product, category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);
}
else if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({product : product, category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);
}
else {
  catalog = await Shop_ua.find({product : product, category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  let total = await Shop_ua.find({product : product, category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({product : product, man_women : man_woman, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);
}
else if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({product : product, man_women : man_woman, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);
}
else {
  catalog = await Shop_ua.find({product : product, man_women : man_woman, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  let total = await Shop_ua.find({product : product, man_women : man_woman, newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);
}
else if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);
}
else {
  catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  let total = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);
}
else if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);
}
else {
  catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  let total = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({product : product, category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);
}
else if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({product : product, category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);
}
else {
  catalog = await Shop_ua.find({product : product, category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  let total = await Shop_ua.find({product : product, category : category, newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({product : product, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);
}
else if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({product : product, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);
}
else {
  catalog = await Shop_ua.find({product : product, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  let total = await Shop_ua.find({product : product, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({category : category, man_women : man_woman, product: product, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);
}
else if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({category : category, man_women : man_woman, product: product, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);
}
else {
  catalog = await Shop_ua.find({category : category, man_women : man_woman, product: product, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  let total = await Shop_ua.find({category : category, man_women : man_woman, product: product, newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({category : category, man_women : man_woman, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);
}
else  if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({category : category, man_women : man_woman, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);
}
else {
  catalog = await Shop_ua.find({category : category, man_women : man_woman, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  let total = await Shop_ua.find({category : category, man_women : man_woman, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({product : product, man_women : man_woman, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);
}
  else if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({product : product, man_women : man_woman, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);
}
else {
  catalog = await Shop_ua.find({product : product, man_women : man_woman, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  let total = await Shop_ua.find({product : product, man_women : man_woman, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({product : product, category : category, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);
}
else if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({product : product, category : category, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);
}
else {
  catalog = await Shop_ua.find({product : product, category : category, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  let total = await Shop_ua.find({product : product, category : category, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
  catalog = await Shop_ua.find({ man_women : man_woman, category : category,product: product, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);
}
else if(sort === "maxMinPrice"){
  catalog = await Shop_ua.find({man_women : man_woman, category : category, product: product, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: -1,
  })
  .limit(limit)
  .skip(skip);
}
else {
  catalog = await Shop_ua.find({man_women : man_woman, category : category,product: product, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_euro: 1,
  })
  .limit(limit)
  .skip(skip);}
  let total = await Shop_ua.find({ man_women : man_woman, category : category,product: product, sizes:{ $in: reg }, newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
  return res.status(200).json({ catalog, total });
}

catalog = await Shop_ua.find({newPrice_euro: { $gte: minPrice, $lte: maxPrice }})
.sort({
  newPrice_euro: 1,
})
.limit(limit)
.skip(skip);
total = await Shop_ua.find({newPrice_euro: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({description:{ $in: regsearch }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    else if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({description:{ $in: regsearch }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);}
    else {
      catalog = await Shop_ua.find({description:{ $in: regsearch }})
      .sort({
        newPrice_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
    let total = await Shop_ua.find({description:{ $in: regsearch }}).count();
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
    catalog = await Shop_ua.find({newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    else if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);}
    else {
      catalog = await Shop_ua.find({newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
      .sort({
        newPrice_ua: 1,
      })
      .limit(limit)
      .skip(skip);}
    let total = await Shop_ua.find({newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({man_women : man_woman, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);
  }
    else if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({man_women : man_woman, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop_ua.find({man_women : man_woman, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop_ua.find({man_women : man_woman, newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop_ua.find({category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop_ua.find({category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({product : product, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({product : product, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop_ua.find({product : product, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop_ua.find({product : product, newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else  if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop_ua.find({sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop_ua.find({sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({category : category, man_women : man_woman, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({category : category, man_women : man_woman, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop_ua.find({category : category, man_women : man_woman, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop_ua.find({category : category, man_women : man_woman, newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({product : product, category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({product : product, category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop_ua.find({product : product, category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop_ua.find({product : product, category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({product : product, man_women : man_woman, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({product : product, man_women : man_woman, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop_ua.find({product : product, man_women : man_woman, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop_ua.find({product : product, man_women : man_woman, newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop_ua.find({sizes:{ $in: reg }, category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({product : product, category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({product : product, category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop_ua.find({product : product, category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop_ua.find({product : product, category : category, newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({product : product, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({product : product, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop_ua.find({product : product, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop_ua.find({product : product, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({category : category, man_women : man_woman, product: product, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({category : category, man_women : man_woman, product: product, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop_ua.find({category : category, man_women : man_woman, product: product, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop_ua.find({category : category, man_women : man_woman, product: product, newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({category : category, man_women : man_woman, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else  if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({category : category, man_women : man_woman, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop_ua.find({category : category, man_women : man_woman, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop_ua.find({category : category, man_women : man_woman, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({product : product, man_women : man_woman, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);
  }
    else if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({product : product, man_women : man_woman, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop_ua.find({product : product, man_women : man_woman, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop_ua.find({product : product, man_women : man_woman, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({product : product, category : category, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({product : product, category : category, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop_ua.find({product : product, category : category, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop_ua.find({product : product, category : category, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
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
    catalog = await Shop_ua.find({ man_women : man_woman, category : category,product: product, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);
  }
  else if(sort === "maxMinPrice"){
    catalog = await Shop_ua.find({man_women : man_woman, category : category, product: product, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: -1,
    })
    .limit(limit)
    .skip(skip);
  }
  else {
    catalog = await Shop_ua.find({man_women : man_woman, category : category,product: product, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
    .sort({
      newPrice_ua: 1,
    })
    .limit(limit)
    .skip(skip);}
    let total = await Shop_ua.find({ man_women : man_woman, category : category,product: product, sizes:{ $in: reg }, newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
    return res.status(200).json({ catalog, total });
  }

  catalog = await Shop_ua.find({newPrice_ua: { $gte: minPrice, $lte: maxPrice }})
  .sort({
    newPrice_ua: 1,
  })
  .limit(limit)
  .skip(skip);
  total = await Shop_ua.find({newPrice_ua: { $gte: minPrice, $lte: maxPrice }}).count();
return res.status(200).json({ catalog, total });
}
// FINISH UAH
  } catch (error) {
    res.status(400).json({ message: "Invalid filters characters" });
  }
};

module.exports = getShopByFilter_ua;