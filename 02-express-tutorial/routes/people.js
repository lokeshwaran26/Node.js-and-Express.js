app.get('/api/people', (req,res)=>{
    res.status(200).json({ success : true, data : people})
})

app.put('/api/people/:id', (req,res)=>{
    const { id } = req.params;
    const { name } = req.body;
    console.log( id, name)
    const person = people.find((person)=> person.id === Number(id));

    if(!person){
        return res
        .status(404)
        .json({ success: false, msg: `id ${id} don't exists`})
    }
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name;
        }

        return person
    })
    res.status(200).json({ success: true, data: newPeople});
})

app.post('/api/people', (req, res)=>{
    const { name } = req.body
    if(!name){
        return res.status(400).json({ success : false, msg : "please provide the name!"})
    }
    res.status(201).json({ success : true, person : name})
})