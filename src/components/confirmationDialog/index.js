import React from "react";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { pink } from "@mui/material/colors";
import styled from "@emotion/styled";
import { DatePicker } from "@mui/x-date-pickers";
import { useAppContext } from "../../context/appContext";
import TagsInput from "../tagsInput";
import { Checkbox, Switch } from "@mui/material";

const FormGroup = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

const Confirmation = ({ selectedReservation }) => {
  const { setSelctedReservation } = useAppContext();

  if (!selectedReservation) return null;

  return (
    <Dialog
      open
      fullWidth
      maxWidth="lg"
      onClose={() => setSelctedReservation(null)}
      PaperProps={{
        sx: {
          padding: "1.6rem",
        },
      }}
    >
      <Box
        sx={{
          "& svg": {
            width: "0.8em",
          },
        }}
      >
        <DatePicker
          onChange={() => {}}
          renderInput={(props) => (
            <TextField
              {...props}
              variant="standard"
              label="Date of Arrival"
              sx={{ m: 1 }}
            />
          )}
          value={selectedReservation?.stay.arrivalDate}
        />

        <DatePicker
          onChange={() => {}}
          renderInput={(props) => (
            <TextField
              {...props}
              variant="standard"
              label="Date of Departure"
              sx={{
                m: 1,
              }}
            />
          )}
          value={selectedReservation?.stay.departureDate}
        />
      </Box>

      <FormGroup sx={{ display: "flex" }}>
        <FormControl variant="standard" sx={{ m: 1, width: "180px" }}>
          <InputLabel id="room-size">Room Size</InputLabel>
          <Select
            value={selectedReservation?.room.roomSize}
            labelId="room-size"
            label="room"
          >
            <MenuItem value="business-suite">Business Suite</MenuItem>
            <MenuItem value="presidential-suite">Presidential Suite</MenuItem>
          </Select>
          <FormHelperText>Choose a room type</FormHelperText>
        </FormControl>

        <TextField
          label="Room Quantity"
          value={selectedReservation?.room.roomQuantity}
          variant="standard"
          sx={{ m: 1 }}
          helperText="Maximum: 5"
        />
      </FormGroup>

      <FormGroup>
        <TextField
          label="First Name"
          value={selectedReservation?.firstName}
          variant="standard"
          sx={{ m: 1 }}
          helperText={`${
            selectedReservation ? selectedReservation.firstName.length : 0
          }/25`}
          FormHelperTextProps={{
            sx: {
              textAlign: "right",
            },
          }}
        />
      </FormGroup>

      <FormGroup>
        <TextField
          label="Last Name"
          value={selectedReservation?.lastName}
          variant="standard"
          sx={{ m: 1 }}
          helperText={`${
            selectedReservation ? selectedReservation.lastName.length : 0
          }/50`}
          FormHelperTextProps={{
            sx: {
              textAlign: "right",
            },
          }}
        />
      </FormGroup>

      <FormGroup>
        <TextField
          label="E-mail"
          value={selectedReservation?.email}
          variant="standard"
          sx={{ m: 1 }}
        />
      </FormGroup>

      <FormGroup>
        <TextField
          label="Phone Number"
          value={`+${selectedReservation?.phone}`}
          variant="standard"
          sx={{ m: 1 }}
          helperText="Add your country code first"
        />
      </FormGroup>

      <FormGroup>
        <TextField
          label="Street Name"
          value={selectedReservation?.addressStreet.streetName}
          variant="standard"
          sx={{ m: 1 }}
        />

        <TextField
          label="Street Number"
          value={selectedReservation?.addressStreet.streetNumber}
          variant="standard"
          sx={{ m: 1 }}
        />
      </FormGroup>

      <FormGroup>
        <TextField
          label="Zip"
          value={selectedReservation?.addressLocation.zipCode}
          variant="standard"
          sx={{ m: 1 }}
          helperText=" "
        />

        <TextField
          label="State"
          value={selectedReservation?.addressLocation.state}
          variant="standard"
          sx={{ m: 1 }}
          helperText="Autocomplete"
        />

        <TextField
          label="City"
          value={selectedReservation?.addressLocation.city}
          variant="standard"
          sx={{ m: 1 }}
          helperText=" "
        />
      </FormGroup>

      <FormGroup>
        <FormControl variant="standard" sx={{ m: 1, width: "180px" }}>
          <InputLabel id="extras">Extras</InputLabel>
          <Select
            labelId="extras"
            label="Extras"
            multiple
            value={selectedReservation?.extras}
          >
            {selectedReservation?.extras.map((extra, index) => (
              <MenuItem key={index} value={extra}>
                {extra.replace("extra", "")}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FormGroup>

      <FormGroup>
        <RadioGroup row value={selectedReservation?.payment} sx={{ m: 1 }}>
          <FormControlLabel
            value="cc"
            label="Credit Card"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              />
            }
          />

          <FormControlLabel
            value="paypal"
            label="PayPal"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              />
            }
          />

          <FormControlLabel
            value="cash"
            label="Cash"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              />
            }
          />

          <FormControlLabel
            value="bitcoin"
            label="Bitcoin"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              />
            }
          />
        </RadioGroup>
      </FormGroup>

      <FormGroup>
        <TextField
          label="Personal Note"
          value={selectedReservation?.note}
          variant="standard"
          sx={{ m: 1 }}
        />
      </FormGroup>

      <FormGroup>
        <TagsInput
          selectedTags={() => {}}
          fullWidth
          variant="standard"
          id="tags"
          name="tags"
          label="Tags"
          tags={selectedReservation?.tags}
          sx={{
            m: 1,
          }}
        />
      </FormGroup>

      <FormGroup>
        <Box>
          <Box>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: pink[600],
                      "&:hover": {
                        backgroundColor: "rgba(216, 27, 96, 0.08)",
                      },
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: pink[600],
                    },
                  }}
                />
              }
              label="Send me a reminder"
            />
          </Box>

          <FormControlLabel
            control={
              <Switch
                defaultChecked
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: pink[600],
                    "&:hover": {
                      backgroundColor: "rgba(216, 27, 96, 0.08)",
                    },
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: pink[600],
                  },
                }}
              />
            }
            label="Subscribe to newsletter"
          />
        </Box>
      </FormGroup>

      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          }
          label="I confirm the information given above"
        />
      </FormGroup>
    </Dialog>
  );
};

export default Confirmation;
