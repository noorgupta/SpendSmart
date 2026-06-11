const User = require("../models/User");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    //Validating Email 

    if(!validator.isEmail(email)){
      return res.status(400).json({
        success: false,
        message: "Please provide valid Email",
      });
    }

    //Validating PhoneNumber 

    if(!validator.isLength(password, { min: 6 })){
      return res.status(400).json({
        success: false,
        message: "Password should be atleast 6 characters long "
      });
    }

    // Hash password
    const hashedPass = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPass,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: user,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
    registration,
    login
}

