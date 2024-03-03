<?php
include('header.php');
?>

<body>
      <!--top part -->
      <div id="toppart">
         <!--maincontener -->
         <div id="maincontener">
            <!--menu pannel -->
            <div id="menu_part">
               <ul>
                  <li><a href="https://simmonsinno.com/getbcdesign/home.php" >Home</a></li>
                  <li><a href="https://simmonsinno.com/getbcdesign/aboutus.php">About</a></li>
                  <li><a href="https://simmonsinno.com/getbcdesign/services.php" >Services</a></li>
                  <li><a href="https://simmonsinno.com/getbcdesign/catalogue.php">Gallery</a></li>
                  <li><a href="https://simmonsinno.com/getbcdesign/specials.php">Specials</a></li>
                  <li><a href="https://simmonsinno.com/getbcdesign/faq.php">Faq's</a></li>
                  <li><a href="https://simmonsinno.com/getbcdesign/contactus.php" class="active">Contact&nbsp;Us</a></li>
               </ul>
            </div>
            <br class="spacer"/>
            <!--menu pannel end -->
            <!--logo pannel -->
            <div id="logo_pannel"> <a href="https://www.getbcdesign.com/"><img src="images/logo.png" width="363" height="100" alt="Brothers Cabinetry AND Design" title="Brothers Cabinetry AND Design"//>
            </div>
            <!--logo pannel end -->
            <!--header banner pannel -->
            <div id="header_banner_part"> 
       				<img src="images/header_banner.png" width="946" alt=""> 
       		</div>
            <!--header banner pannel end -->
               
            <div id="body_contener_pannel">
  <!--welcome pannel -->
  <div id="contener_part">
    <h1>Contact Us</h1>
    <form id="form1" name="form1" action="https://web.archive.org/web/20221204190846/https://getbcdesign.com/confirmation/contactusmail" method="post" onsubmit="return check();" class="formpannel">
      <label>Name:<span class="red">*</span></label>
      <input name="Name" id="Name" title="Please enter your Name" class="input1">
      <br class="spacer">
      <label>Address:</label>
      <textarea name="Address" rows="5" cols="" id="Address" class="input2" title="Please enter your Address"></textarea>
      <br class="spacer">
      <label>City:<span class="red">*</span></label>
      <input class="input1" name="City" id="City" title="Please enter your City">
      <br class="spacer">
      <label>Country:</label>
      <select size="1" name="Country" id="Country" class="select" title="Please Select your Country from this List">
        <option value="APO/FPO">APO/FPO</option>
        <option value="Afghanistan">Afghanistan</option>
        <option value="Albania">Albania</option>
        <option value="Algeria">Algeria</option>
        <option value="American Samoa">American Samoa</option>
        <option value="Andorra">Andorra</option>
        <option value="Angola">Angola</option>
        <option value="Anguilla">Anguilla</option>
        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
        <option value="Argentina">Argentina</option>
        <option value="Armenia">Armenia</option>
        <option value="Aruba">Aruba</option>
        <option value="Australia">Australia</option>
        <option value="Austria">Austria</option>
        <option value="Azerbaijan Republic">Azerbaijan Republic</option>
        <option value="Bahamas">Bahamas</option>
        <option value="Bahrain">Bahrain</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="Barbados">Barbados</option>
        <option value="Belarus">Belarus</option>
        <option value="Belgium">Belgium</option>
        <option value="Belize">Belize</option>
        <option value="Benin">Benin</option>
        <option value="Bermuda">Bermuda</option>
        <option value="Bhutan">Bhutan</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
        <option value="Botswana">Botswana</option>
        <option value="Brazil">Brazil</option>
        <option value="British Virgin Islands">British Virgin Islands</option>
        <option value="Brunei Darussalam">Brunei Darussalam</option>
        <option value="Bulgaria">Bulgaria</option>
        <option value="Burkina Faso">Burkina Faso</option>
        <option value="Burma">Burma</option>
        <option value="Burundi">Burundi</option>
        <option value="Cambodia">Cambodia</option>
        <option value="Cameroon">Cameroon</option>
        <option value="Canada" selected="selected">Canada</option>
        <option value="Cape Verde Islands">Cape Verde Islands</option>
        <option value="Cayman Islands">Cayman Islands</option>
        <option value="Central African Republic">Central African Republic</option>
        <option value="Chad">Chad</option>
        <option value="Chile">Chile</option>
        <option value="China">China</option>
        <option value="Colombia">Colombia</option>
        <option value="Comoros">Comoros</option>
        <option value="Congo, Democratic Republic">Congo, Democratic Republic</option>
        <option value="Congo, Republic">Congo, Republic</option>
        <option value="Cook Islands">Cook Islands</option>
        <option value="Costa Rica">Costa Rica</option>
        <option value="Ivory Coast">Cote d Ivoire (Ivory Coast)</option>
        <option value="Croatia, Republic of">Croatia, Republic</option>
        <option value="Cyprus">Cyprus</option>
        <option value="Czech Republic">Czech Republic</option>
        <option value="Denmark">Denmark</option>
        <option value="Djibouti">Djibouti</option>
        <option value="Dominica">Dominica</option>
        <option value="Dominican Republic">Dominican Republic</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Egypt">Egypt</option>
        <option value="El Salvador">El Salvador</option>
        <option value="Equatorial Guinea">Equatorial Guinea</option>
        <option value="Eritrea">Eritrea</option>
        <option value="Estonia">Estonia</option>
        <option value="Ethiopia">Ethiopia</option>
        <option value="Falkland Islands">Falkland Islands</option>
        <option value="Fiji">Fiji</option>
        <option value="Finland">Finland</option>
        <option value="France">France</option>
        <option value="French Guiana">French Guiana</option>
        <option value="French Polynesia">French Polynesia</option>
        <option value="Gabon Republic">Gabon Republic</option>
        <option value="Gambia">Gambia</option>
        <option value="Georgia">Georgia</option>
        <option value="Germany">Germany</option>
        <option value="Ghana">Ghana</option>
        <option value="Gibraltar">Gibraltar</option>
        <option value="Greece">Greece</option>
        <option value="Greenland">Greenland</option>
        <option value="Grenada">Grenada</option>
        <option value="Guadeloupe">Guadeloupe</option>
        <option value="Guam">Guam</option>
        <option value="Guatemala">Guatemala</option>
        <option value="Guernsey">Guernsey</option>
        <option value="Guinea">Guinea</option>
        <option value="Guinea-Bissau">Guinea-Bissau</option>
        <option value="Guyana">Guyana</option>
        <option value="Haiti">Haiti</option>
        <option value="Honduras">Honduras</option>
        <option value="Hong Kong">Hong Kong</option>
        <option value="Hungary">Hungary</option>
        <option value="Iceland">Iceland</option>
        <option value="India">India</option>
        <option value="Indonesia">Indonesia</option>
        <option value="Ireland">Ireland</option>
        <option value="Israel">Israel</option>
        <option value="Italy">Italy</option>
        <option value="Jamaica">Jamaica</option>
        <option value="Jan Mayen">Jan Mayen</option>
        <option value="Japan">Japan</option>
        <option value="Jersey">Jersey</option>
        <option value="Jordan">Jordan</option>
        <option value="Kazakhstan">Kazakhstan</option>
        <option value="Kenya Coast Republic">Kenya Coast Republic</option>
        <option value="Kiribati">Kiribati</option>
        <option value="Korea, South">Korea, South</option>
        <option value="Kuwait">Kuwait</option>
        <option value="Kyrgyzstan">Kyrgyzstan</option>
        <option value="Laos">Laos</option>
        <option value="Latvia">Latvia</option>
        <option value="Lebanon">Lebanon</option>
        <option value="Liechtenstein">Liechtenstein</option>
        <option value="Lithuania">Lithuania</option>
        <option value="Luxembourg">Luxembourg</option>
        <option value="Macau">Macau</option>
        <option value="Macedonia">Macedonia</option>
        <option value="Madagascar">Madagascar</option>
        <option value="Malawi">Malawi</option>
        <option value="Malaysia">Malaysia</option>
        <option value="Maldives">Maldives</option>
        <option value="Mali">Mali</option>
        <option value="Malta">Malta</option>
        <option value="Marshall Islands">Marshall Islands</option>
        <option value="Marshall Islands">Martinique</option>
        <option value="Mauritania">Mauritania</option>
        <option value="Mauritius">Mauritius</option>
        <option value="Mayotte">Mayotte</option>
        <option value="Mexico">Mexico</option>
        <option value="Micronesia">Micronesia</option>
        <option value="Moldova">Moldova</option>
        <option value="Monaco">Monaco</option>
        <option value="Mongolia">Mongolia</option>
        <option value="Montserrat">Montserrat</option>
        <option value="Morocco">Morocco</option>
        <option value="Mozambique">Mozambique</option>
        <option value="Namibia">Namibia</option>
        <option value="Nauru">Nauru</option>
        <option value="Nepal">Nepal</option>
        <option value="Netherlands">Netherlands</option>
        <option value="Netherlands Antilles">Netherlands Antilles</option>
        <option value="New Caledonia">New Caledonia</option>
        <option value="New Zealand">New Zealand</option>
        <option value="Nicaragua">Nicaragua</option>
        <option value="Niger">Niger</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Niue">Niue</option>
        <option value="Norway">Norway</option>
        <option value="Oman">Oman</option>
        <option value="Pakistan">Pakistan</option>
        <option value="Palau">Palau</option>
        <option value="Panama">Panama</option>
        <option value="Papua New Guinea">Papua New Guinea</option>
        <option value="Paraguay">Paraguay</option>
        <option value="Peru">Peru</option>
        <option value="Philippines">Philippines</option>
        <option value="Poland">Poland</option>
        <option value="Portugal">Portugal</option>
        <option value="Puerto Rico">Puerto Rico</option>
        <option value="Qatar">Qatar</option>
        <option value="Romania">Romania</option>
        <option value="Russian Federation">Russian Federation</option>
        <option value="Rwanda">Rwanda</option>
        <option value="Saint Helena">Saint Helena</option>
        <option value="Saint Kitts-Nevis">Saint Kitts-Nevis</option>
        <option value="Saint Lucia">Saint Lucia</option>
        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
        <option value="Saint Pierre and Miquelon">Saint Vincent and the Grenadines</option>
        <option value="San Marino">San Marino</option>
        <option value="Saudi Arabia">Saudi Arabia</option>
        <option value="Senegal">Senegal</option>
        <option value="Seychelles">Seychelles</option>
        <option value="Sierra Leone">Sierra Leone</option>
        <option value="Singapore">Singapore</option>
        <option value="Slovakia">Slovakia</option>
        <option value="Slovenia">Slovenia</option>
        <option value="Solomon Islands">Solomon Islands</option>
        <option value="Somalia">Somalia</option>
        <option value="Somalia">South Africa</option>
        <option value="Spain">Spain</option>
        <option value="Sri Lanka">Sri Lanka</option>
        <option value="Suriname">Suriname</option>
        <option value="Svalbard">Svalbard</option>
        <option value="Swaziland">Swaziland</option>
        <option value="Sweden">Sweden</option>
        <option value="Switzerland">Switzerland</option>
        <option value="Syria">Syria</option>
        <option value="Tahiti">Tahiti</option>
        <option value="Taiwan">Taiwan</option>
        <option value="Tajikistan">Tajikistan</option>
        <option value="Tanzania">Tanzania</option>
        <option value="Thailand">Thailand</option>
        <option value="Togo">Togo</option>
        <option value="Tonga">Tonga</option>
        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
        <option value="Tunisia">Tunisia</option>
        <option value="Turkey">Turkey</option>
        <option value="Turkmenistan">Turkmenistan</option>
        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
        <option value="Tuvalu">Tuvalu</option>
        <option value="Uganda">Uganda</option>
        <option value="Ukraine">Ukraine</option>
        <option value="United Arab Emirates">United Arab Emirates</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="United States">United States</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Uzbekistan">Uzbekistan</option>
        <option value="Vanuatu">Vanuatu</option>
        <option value="Vatican City State">Vatican City State</option>
        <option value="Venezuela">Venezuela</option>
        <option value="Vietnam">Vietnam</option>
        <option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>
        <option value="Wallis and Futuna">Wallis and Futuna</option>
        <option value="Western Sahara">Western Sahara</option>
        <option value="Western Samoa">Western Samoa</option>
        <option value="Yemen">Yemen</option>
        <option value="Yugoslavia">Yugoslavia</option>
        <option value="Zambia">Zambia</option>
        <option value="Zimbabwe">Zimbabwe</option>
      </select>
      <br class="spacer">
      <label>Telephone:<span class="red">*</span></label>
      <input maxlength="20" name="Phone" id="Phone" class="input1" title="Please enter Phone No.">
      <br class="spacer">
      <label>E-Mail:</label>
      <input class="input1" name="Email" id="Email" title="Please enter valid E-Mail">
      <br class="spacer">
      <label>Comments:</label>
      <textarea name="Comments" rows="5" cols="" id="Comments" class="input2" title="Please enter your requirements and any additional infomation which may be useful"></textarea>
      <br class="spacer">
      <input class="submit" type="submit" value="Submit" name="action">
      &nbsp;&nbsp;
      <input class="submit2" type="reset" value="Reset" name="reset">
    </form>
    <br class="spacer">
    <!--our catagury -->
    <div class="ourcatagury">
      <h2>Contact Information</h2>
       <p><strong>Brothers Cabinetry &amp; Design</strong><br>
<br>
Address:  125 - 12417 No. 2 Road<br>
City:  Richmond<br>
Province: British Columbia<br>
Postal Code:  V7E 6H6<br>
Country:Canada</p>

<p style="padding-top:8px;">Phone: 604.241.8211<br>
Mobile: 778.895.1264<br>
Email: &nbsp;<a href="https://web.archive.org/web/20221204190846/mailto:info@getbcdesign.com">info@getbcdesign.com</a></p>
     </div>
    <!--our catagury end -->
    <div class="googlemap">
      <h2>Google Map</h2>
      <table cellspacing="0" cellpadding="0" border="0" class="map">
        <tbody><tr>
          <td>          
          <iframe width="263" height="181" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://web.archive.org/web/20221204190846if_/https://maps.google.ca/maps?q=unit+125,+12417+No.+2+Road,+richmond&amp;hl=en&amp;sll=49.123082,-123.159034&amp;sspn=0.012021,0.027874&amp;hnear=12417+Number+2+Rd+%23125,+Richmond,+Greater+Vancouver,+British+Columbia+V7E+6S4&amp;t=m&amp;ie=UTF8&amp;hq=&amp;ll=49.180806,-123.156738&amp;spn=0.16248,0.359802&amp;z=10&amp;iwloc=A&amp;output=embed" data-ruffle-polyfilled=""></iframe><br><small><a href="https://web.archive.org/web/20221204190846/https://maps.google.ca/maps?q=unit+125,+12417+No.+2+Road,+richmond&amp;hl=en&amp;sll=49.123082,-123.159034&amp;sspn=0.012021,0.027874&amp;hnear=12417+Number+2+Rd+%23125,+Richmond,+Greater+Vancouver,+British+Columbia+V7E+6S4&amp;t=m&amp;ie=UTF8&amp;hq=&amp;ll=49.180806,-123.156738&amp;spn=0.16248,0.359802&amp;z=10&amp;iwloc=A&amp;source=embed" style="color:#0000FF;text-align:left" target="_blank"><span style="color:#FFFFFF;">View Larger Map</span></a></small>
          
          
          </td>
        </tr>
        <tr>
          <td align="right"></td>
        </tr>
      </tbody></table>
      <!-- Do not change code! -->
    </div>
  </div>
  <!--welcome pannel end -->
</div>


            <!--body contener  end-->
         </div>
         <!--maincontener end -->
         <!--footer pannel -->
         <?php
            include('footer.php');
         ?>
          <!--footer pannel end -->
      