const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
    name: {
        type : String,
        required: [true, "Enter product name"],
        trim: true,
        maxLength: [200, "Name required less then 200 characters"]
    },
    price: {
        type: Number,
        required: [true, 'Enter product price'],
        maxLength: [5, "Price range from 1 to 99999"],
        default: 0.0
    },
    descriptions: {
        type: String,
        required: [true, "Enter product description"]
    },
    images: [
        {
            product_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category:{
        type: String,
        required: [true, "Select category"],
        enum: {
            values: [
                'CPU',
                'Monitors',
                'Laptops'
            ],
            message: "Select correct category"
        }
    },
    seller: {
        type: String,
        required: [true, "Enter product seller"]
    },
    stock: {
        type: Number,
        required: [true, "Enter product stock"],
        maxLength: [5, "Stock range from 1 to 99999"],
        default: 0
    },
    numOfReviwers: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports  = mongoose.model('Product', productScheme);