import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();
const secret = process.env.SECRET;

export const signin = async (req, res) => {
    const { email, password } = req.body;
    const Admin = [{email: process.env.ADMIN_EMAIL, password: process.env.ADMIN_PASSWORD}]
    // console.log(email, password);
    // console.log("EP", Admin[0].email, Admin[0].password)
    try {
      const admin = await Admin.find(u => u.email === email );
    //   console.log("Found: ",admin);
      if (!admin) return res.status(404).json({ message: "User doesn't exist" });
  
      const isPasswordCorrect = await bcrypt.compare(password, admin.password);
  
      if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ email: admin.email, id: admin._id }, secret, { expiresIn: "1h" });
  
      res.status(200).json({ result: admin, token });
    } catch (err) {
        console.log(err);
      res.status(500).json({ message: "Something went wrong" });
    }
  };
  
export const postHero = (req, res)=>{
    res.send("I am Admin, Here");
}