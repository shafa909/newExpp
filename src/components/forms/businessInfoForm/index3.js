import { useState, useMemo } from "react";

import { FormControl, Box, TextField, MenuItem, styled } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/system";
import countryList from "react-select-country-list";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const domain = [
  {
    1: "Banking, Finance and Insurance",
    2: "IT & Software Services",
    3: "Manufacturing",
    4: "E-commerce",
    5: "Online Services and Marketing",
    6: "Logistics and Supply Chain Management",
    7: "Telecommunication",
  },
];

const SuccessBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "initial",
}));

const roles = [
  {
    1: "CEO/COO/Owner",
    2: "Product Owner",
    3: "Hiring Manager",
    4: "Human Resources",
    5: "Operations",
    6: "Other (specify):",
  },
];

const BusinessTextFields = (props) => {
  const [value, setValue] = useState("");
  const countries = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [domain, setDomain] = useState("");
  const [headcount, setHeadcount] = useState("");
  const [experience, setExperience] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
    setCountry(event.target.value);
    setDomain(event.target.value);
    setHeadcount(event.target.value);
    setExperience(event.target.value);
  };

  return (
    <SuccessBox component="form" noValidate autoComplete="off">
      <FormControl
        sx={{
          m: 6,
          minWidth: 500,
          display: "flex",
          flexDirection: "row",
          margin: "16px",
        }}
      >
        <TextField
          id="standard-basic"
          label="Business Name*"
          variant="standard"
          sx={{
            width: "280px",
            marginLeft: "-5px",
            marginRight: "40px",
          }}
        />
        <TextField
          id="standard-select-role"
          select
          label="Your Role in this Business"
          value={role}
          onChange={handleChange}
          variant="standard"
          sx={{
            width: "280px",
          }}
        >
          {roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
      <FormControl
        sx={{
          m: 2,
          minWidth: 500,
          display: "flex",
          flexDirection: "row",
          marginTop: "16px",
        }}
      >
        <TextField
          id="standard-select-currency"
          select
          label="Business Country *"
          value={countries}
          onChange={changeHandler}
          variant="standard"
          sx={{
            width: "280px",
            marginLeft: "-5px",
            marginRight: "40px",
          }}
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency"
          select
          label="Business Domain*"
          value={domain}
          onChange={handleChange}
          variant="standard"
          sx={{
            width: "280px",
          }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
      <FormControl
        sx={{
          m: 6,
          minWidth: 500,
          display: "flex",
          flexDirection: "row",
          margin: "16px",
          borderColor: "rgba(255, 255, 255, 0.74)",
        }}
      >
        <TextField
          id="standard-select-currency"
          select
          label="Business Headcount"
          value={headcount}
          onChange={handleChange}
          variant="standard"
          sx={{
            width: "280px",
            marginLeft: "-5px",
            marginRight: "40px",
            borderColor: "rgba(255, 255, 255, 0.74)",
          }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency"
          select
          label="Remote Work Experience"
          value={experience}
          onChange={handleChange}
          variant="standard"
          sx={{
            width: "280px",
          }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
      <TextField
        id="standard-basic"
        label="Business Website*"
        variant="standard"
        sx={{ m: 6, minWidth: 500, margin: "16px", marginBottom: "-70px" }}
      />
    </SuccessBox>
  );
};

export default BusinessTextFields;
