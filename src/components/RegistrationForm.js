import React, { useState } from 'react';
import '../css/RegistrationForm.css';
import moment from "moment";
import PhoneInput from 'react-phone-number-input';
function EntryForm() {

        const [value, setValue] = useState(moment().format('YYYY-MM-DD'));
        const onChangeDate = (date) => {
          const newDate = setValue(moment(new Date(date.target.value)).format("YYYY-MM-DD"));
          setValue(newDate);
          console.log(newDate); //always log "1970-01-01"
        };

    const today=new Date();


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        mobile: '',
        dob: '',
        subjects: '',
        hobbies: [],
        picture: '',
        address: '',
        state: '',
        city: ''
    });

    const [cities, setCities] = useState([]);

    const states = {
        AndhraPradesh: ['Alluri Sitharama Raju', 'Anakapalli', 'Ananthapuramu', 'Annamayya', 'Bapatla', 'Chittoor', 'Dr. B.R. Ambedkar Konaseema', 'East Godavari', 'Eluru', 'Guntur', 'Kakinada', 'Krishna', 'Kurnool', 'Nandyal', 'Ntr', 'Palnadu', 'Parvathipuram Manyam', 'Prakasam', 'Sri Potti Sriramulu Nellore', 'Sri Sathya Sai', 'Srikakulam', 'Tirupati', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'Y.S.R.'],
        ArunachalPradesh: ['East Kameng', 'Papum Pare', 'Pakke-Kessang', 'Kurung Kumey', 'Kra Daadi', 'Lower Subansiri', 'Upper Subansiri', 'West Siang', 'East Siang', 'Siang', 'Upper Siang', 'Lower Siang', 'Lepa Rada', 'Shi-Yomi', 'Kamle', 'Lower Dibang Valley', 'Dibang Valley', 'Anjaw', 'Lohit', 'Namsai', 'Changlang', 'Tirap', 'Longding'],
        Assam: ['Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasao', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup Metropolitan', 'Kamrup', 'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'South Salmara-Mankachar', 'Tinsukia', 'Udalguri', 'West Karbi Anglong'],
        Bihar: ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'],
        Chhattisgarh: ['Balod', 'Baloda Bazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Dantewada (South Bastar)', 'Dhamtari', 'Durg', 'Gariaband', 'Gaurela-Pendra-Marwahi', 'Janjgir-Champa', 'Jashpur', 'Kabirdham (Kawardha)', 'Kanker (North Bastar)', 'Kondagaon', 'Korba', 'Koriya', 'Mahasamund', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sukma', 'Surajpur', 'Surguja'],
        Goa: ['North Goa', 'South Goa'],
        Gujarat: ['Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha (Palanpur)', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhota Udepur', 'Dahod', 'Dangs (Ahwa)', 'Devbhoomi Dwarka', 'Gandhinagar', 'Gir Somnath', 'Jamnagar', 'Junagadh', 'Kachchh', 'Kheda (Nadiad)', 'Mahisagar', 'Mehsana', 'Morbi', 'Narmada (Rajpipla)', 'Navsari', 'Panchmahal (Godhra)', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha (Himmatnagar)', 'Surat', 'Surendranagar', 'Tapi (Vyara)', 'Vadodara', 'Valsad'],
        Haryana: ['Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurugram (Gurgaon)', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'],
        HimachalPradesh: ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul and Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una'],
        Jharkhand: ['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ramgarh', 'Ranchi', 'Sahebganj', 'Seraikela Kharsawan', 'Simdega', 'West Singhbhum'],
        Karnataka: ['Bagalkot', 'Bangalore Rural', 'Bangalore Urban', 'Belgaum', 'Bellary', 'Bidar', 'Chamarajanagar', 'Chikballapur', 'Chikkamagaluru', 'Chitradurga', 'Dakshina Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Gulbarga', 'Hassan', 'Haveri', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysore', 'Raichur', 'Ramanagara', 'Shimoga', 'Tumkur', 'Udupi', 'Uttara Kannada', 'Vijayapura', 'Yadgir'],
        Kerala: ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'],
        MadhyaPradesh: ['Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Mandla', 'Mandsaur', 'Morena', 'Narsinghpur', 'Neemuch', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha'],
        Maharashtra: ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai', 'City', 'Mumbai', 'Suburban', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad', 'Palghar', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'],
        Manipur: ['Bishnupur', 'Chandel', 'Churachandpur', 'Imphal East', 'Imphal West', 'Jiribam', 'Kakching', 'Kamjong', 'Kangpokpi', 'Noney', 'Pherzawl', 'Senapati', 'Tamenglong', 'Tengnoupal', 'Thoubal', 'Ukhrul'],
        Meghalaya: ['East Khasi Hills', 'West Khasi Hills', 'South West Khasi Hills', 'Ri Bhoi', 'East Jaintia Hills', 'West Jaintia Hills', 'East Garo Hills', 'West Garo Hills', 'North Garo Hills', 'South Garo Hills', 'South West Garo Hills'],
        Mizoram: ['Aizawl', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha', 'Serchhip', 'Champhai', 'Hnahthial', 'Khawzawl', 'Saitual'],
        Nagaland: ['Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Peren', 'Phek', 'Tuensang', 'Wokha', 'Zunheboto', 'Noklak'],
        Odisha: ['Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghpur', 'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar (Keonjhar)', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur (Sonepur)', 'Sundargarh'],
        Punjab: ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Muktsar', 'Nawanshahr (Shahid Bhagat Singh Nagar)', 'Pathankot', 'Patiala', 'Rupnagar', 'Sangrur', 'Tarn Taran'],
        Rajasthan: ['Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Pratapgarh', 'Rajsamand', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Sri Ganganagar', 'Tonk', 'Udaipur'],
        Sikkim: ['East Sikkim', 'North Sikkim', 'South Sikkim', 'West Sikkim'],
        TamilNadu: ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thiruvallur', 'Thiruvarur', 'Thoothukudi (Tuticorin)', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvannamalai', 'Vellore', 'Viluppuram', 'Virudhunagar'],
        Telangana: ['Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram Bheem', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal–Malkajgiri', 'Mulugu', 'Nagarkurnool', 'Nalgonda', 'Narayanpet', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Ranga Reddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal Rural', 'Warangal Urban', 'Yadadri Bhuvanagiri'],
        Tripura: ['Dhalai', 'Gomati', 'Khowai', 'North Tripura', 'Sepahijala', 'South Tripura', 'Unakoti', 'West Tripura'],
        UttarPradesh: ['Agra', 'Aligarh', 'Prayagraj (Allahabad)', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Azamgarh', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Ayodhya (Faizabad)', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kushinagar', 'Lakhimpur Kheri', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'Rae Bareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shamli', 'Shravasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'],
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            setFormData(prevState => ({
                ...prevState,
                hobbies: checked
                    ? [...prevState.hobbies, value]
                    : prevState.hobbies.filter(hobby => hobby !== value)
            }));
        } else if (name === "state") {
            setFormData(prevState => ({
                ...prevState,
                state: value,
                city: ''
            }));
            setCities(states[value] || []);
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data Submitted: ', JSON.stringify(formData));
    };

    return (
        <div className="">
        <h1 className="text-center">Registration Form</h1>
            <form className="registration-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-2">
                        <label>Name</label>
                    </div>
                    <div className="col-sm-3">
                        <input type="text" className="mr-sm-2 form-control" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="col-sm-3">
                        <input type="text" className="mr-sm-2 form-control" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-2">
                        <label>Email</label>
                    </div><div className="col-sm-6">
                        <input type="email" className="mr-sm-2 form-control" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    </div>  </div>
                <div className="row">
                    <div className="col-sm-2"><label>Gender</label></div>
                    <div className="col-sm-6">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} />
                            <label className="custom-control-label">   Male
                            </label></div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} />
                            <label className="custom-control-label"> Female</label></div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" name="gender" value="Other" checked={formData.gender === 'Other'} onChange={handleChange} />
                            <label className="custom-control-label">Other</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label>Mobile</label>
                    </div>
                    <div className="col-sm-6">
                        <PhoneInput type="tel" className="mr-sm-2 form-control" name="mobile" international defaultCountry="IN" value={formData.mobile} onChange={formData.mobile} placeholder="Enter phone number"   required />
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label>Date of Birth</label>
                    </div>
                    <div className="col-sm-6">
                    <input
        type="date"
        value={value}
        onChange={(e)=>onChangeDate(e)}
     />
                        </div></div>
                <div className="row">
                    <div className="col-sm-2">
                        <label>Subject</label>
                    </div> <div className="col-sm-6">
                        <input type="text" className="mr-sm-2 form-control" name="subjects" placeholder="Subjects" value={formData.subjects} onChange={handleChange} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label>Hobbies</label></div>
                    <div className="col-sm-6">
                        <div className="custom-control custom-checkbox custom-control-inline">
                           
                                <input type="checkbox" className="custom-control-input" name="reading" value="Reading" checked={formData.hobbies.includes("Reading")} onChange={handleChange} />
                                <label className="custom-control-label">    Reading
                            </label></div>
                        <div className="custom-control custom-checkbox custom-control-inline">
                          
                                <input type="checkbox" className="custom-control-input" name="traveling" value="Traveling" checked={formData.hobbies.includes("Traveling")} onChange={handleChange} />
                                <label className="custom-control-label">     Traveling
                            </label></div>
                        <div className="custom-control custom-checkbox custom-control-inline">
                            
                                <input type="checkbox" className="custom-control-input" name="music" value="Music" checked={formData.hobbies.includes("Music")} onChange={handleChange} />
                                <label className="custom-control-label">    Music
                            </label></div>
                        <div className="custom-control custom-checkbox custom-control-inline">
                           
                                <input type="checkbox" className="custom-control-input" name="sports" value="Sports" checked={formData.hobbies.includes("Sports")} onChange={handleChange} />
                                <label className="custom-control-label">    Sports
                            </label></div></div>
                </div>
                <div className="row mt-4">
                    <div className="col-sm-2">
                        <label>Picture</label></div>
                    <div className="col-sm-6">
                        <label>Select Picture</label>
                        <input type="file" className="mr-sm-2 form-control" name="picture" onChange={handleChange} />
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label>Current Address</label>
                    </div>
                    <div className="col-sm-6"> <textarea className="mr-sm-2 form-control" name="address" placeholder="Current Address" value={formData.address} onChange={handleChange} required></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label>State and City</label>
                    </div>
                    <div className="col-sm-3">
                        <select className="mr-sm-2 form-control" name="state" value={formData.state} onChange={handleChange} required>
                            <option value="">Select State</option>
                            {Object.keys(states).map(state => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select></div>
                    <div className="col-sm-3">
                        <select className="mr-sm-2 form-control" name="city" value={formData.city} onChange={handleChange} required disabled={!formData.state}>
                            <option value="">Select City</option>
                            {cities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="row">
                <div className="col-sm-4 mt-3">
                    <button type="submit" className="mr-sm-2 form-control">Register</button></div>
                    </div>
            </form>
        
    </div>
    );
};

export default EntryForm;
