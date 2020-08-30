const Park = require('../db/models/parks')
// GET all parks 
//@route GET /api/v1/parks

exports.getParks = async (req, res, next) => {
    try{
        const parks = await Park.find()
        
        return res.status(200).json({
            success: true,
            count: parks.length,
            data: parks
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Server error'})
    }
}
exports.addPark = async (req, res, next) => {
    try{
    const park = await Park.create(req.body)
    
    return res.status(201).json({
       
        success: true,
        data: park
    })
    } catch (err) {
        console.error(err);
        if (err.code === 11000) {
          return res.status(400).json({ error: 'This Park already exists' });
        }
        res.status(500).json({ error: 'Server error' });
      }
    };

    