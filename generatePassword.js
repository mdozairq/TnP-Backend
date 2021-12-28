import bcrypt from "bcryptjs";

const genPass =(async () => {
    // Hash the password
    const salt = await bcrypt.genSalt(15);
    console.log(await bcrypt.hash("Admin@123", salt));
})();

export default genPass;