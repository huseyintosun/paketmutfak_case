import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css';
import { Button, FormControl, FormControlLabel, FormLabel, InputAdornment, OutlinedInput, Radio, RadioGroup } from '@mui/material';

function App() {
  const [getir, setGetir] = React.useState(false)
  const [trendyol, setTrendyol] = React.useState(false)
  const [yemekSepeti, setYemekSepeti] = React.useState(false)
  const [getirEkle, setGetirEkle] = React.useState(false)
  const [trendyolEkle, setTrendyolEkle] = React.useState(false)
  const [yemekSepetiEkle, setYemekSepetiEkle] = React.useState(false)

  const handleClickButton = (e) => {
    getir ? (
      setGetirEkle(true)
    ) : trendyol ? (
      setTrendyolEkle(true)
    ) : (
      setYemekSepetiEkle(true)
    )
  }
  

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { maxWidth: '608px' },
      }}
      noValidate
      autoComplete="off"
      className="App"
    >
      <div style={{ mt: "80px" }}>
        <TextField
          required
          label="Restoran Adı"
          type="text"
          defaultValue="BiBuçuk"
          sx={{
            mt: "80px",
            mb: "32px",
            width: '608px',
          }}
        />
      </div>
      <div>
        <TextField
          required
          label="Restoran Telefon Numarası"
          type="text"
          defaultValue="+90 (555) 555 55 55"
          sx={{ pb: "32px", borderBottom: "1px solid #EFF1F1", width: '608px' }}
        />
      </div>
      <div>
        {getirEkle ? <>
          <FormControl sx={{ m: 1, width: '608px' }} variant="outlined">
            <OutlinedInput
              endAdornment={<InputAdornment sx={{ color: '#56BCE2' }} position="end">x</InputAdornment>}
              sx={{ width: "608px", height: "48px", color: "#56BCE2", border: "1px solid #56BCE2" }}
              value="Getir entegrasyonu tamamlandı."
            />
          </FormControl>
        </> : null}
      </div>
      <div>
        {trendyolEkle ? <>
          <FormControl sx={{ m: 1, width: '608px' }} variant="outlined">
            <OutlinedInput
              endAdornment={<InputAdornment sx={{ color: '#56BCE2' }} position="end">x</InputAdornment>}
              sx={{ width: "608px", height: "48px", color: "#56BCE2", border: "1px solid #56BCE2" }}
              value="Trendyol entegrasyonu tamamlandı."
            />
          </FormControl>
        </> : null}
      </div>
      <div>
        {yemekSepetiEkle ? <>
          <FormControl sx={{ m: 1, width: '608px' }} variant="outlined">
            <OutlinedInput
              endAdornment={<InputAdornment sx={{ color: '#56BCE2' }} position="end">x</InputAdornment>}
              sx={{ width: "608px", height: "48px", color: "#56BCE2", border: "1px solid #56BCE2" }}
              value="Yemeksepeti entegrasyonu tamamlandı."
            />
          </FormControl>
        </> : null}
      </div>

      <div>
        <FormControl component="fieldset" sx={{ borderBottom: "1px solid #EFF1F1", pb: "24px" }}>

          {getirEkle & trendyolEkle & yemekSepetiEkle ? null :
            <FormLabel component="legend" sx={{ pt: "28px", pb: "18px" }}>Lütfen entegrasyon yapmak istediğiniz restoran yönetim panelini seçiniz.</FormLabel>
          }
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            {!getirEkle & !trendyolEkle & !yemekSepetiEkle ? <>
              <FormControlLabel
                value="Getir"
                control={<Radio />}
                label="Getir"
                sx={{ border: "1px solid #D3DBDE", borderRadius: "8px", width: "192px", height: "48px", mr: "16px", ml: "10px", "&:hover": { border: "1px solid #56BCE2" } }}
                onClick={() => {
                  setGetir(true)
                  setTrendyol(false)
                  setYemekSepeti(false)
                }}
              />
              <FormControlLabel
                value="Trendyol"
                control={<Radio />}
                label="Trendyol"
                sx={{ border: "1px solid #D3DBDE", borderRadius: "8px", width: "192px", height: "48px", mr: "16px", "&:hover": { border: "1px solid #56BCE2" } }}
                onClick={() => {
                  setGetir(false)
                  setTrendyol(true)
                  setYemekSepeti(false)
                }}
              />
              <FormControlLabel
                value="Yemeksepeti"
                control={<Radio />}
                label="Yemeksepeti"
                sx={{ border: "1px solid #D3DBDE", borderRadius: "8px", width: "192px", height: "48px", "&:hover": { border: "1px solid #56BCE2" } }}
                onClick={() => {
                  setGetir(false)
                  setTrendyol(false)
                  setYemekSepeti(true)
                }}
              />
            </> : getirEkle & !trendyolEkle & !yemekSepetiEkle ? <>
              <FormControlLabel
                value="Trendyol"
                control={<Radio />}
                label="Trendyol"
                sx={{ border: "1px solid #D3DBDE", borderRadius: "8px", width: "296px", height: "48px", mr: "16px", ml: "10px", "&:hover": { border: "1px solid #56BCE2" } }}
                onClick={() => {
                  setGetir(false)
                  setTrendyol(true)
                  setYemekSepeti(false)
                }}
              />
              <FormControlLabel
                value="Yemeksepeti"
                control={<Radio />}
                label="Yemeksepeti"
                sx={{ border: "1px solid #D3DBDE", borderRadius: "8px", width: "296px", height: "48px", "&:hover": { border: "1px solid #56BCE2" } }}
                onClick={() => {
                  setGetir(false)
                  setTrendyol(false)
                  setYemekSepeti(true)
                }}
              />
            </> : !getirEkle & trendyolEkle & !yemekSepetiEkle ? <>
              <FormControlLabel
                value="Getir"
                control={<Radio />}
                label="Getir"
                sx={{ border: "1px solid #D3DBDE", borderRadius: "8px", width: "296px", height: "48px", mr: "16px", ml: "10px", "&:hover": { border: "1px solid #56BCE2" } }}
                onClick={() => {
                  setGetir(true)
                  setTrendyol(false)
                  setYemekSepeti(false)
                }}
              />
              <FormControlLabel
                value="Yemeksepeti"
                control={<Radio />}
                label="Yemeksepeti"
                sx={{ border: "1px solid #D3DBDE", borderRadius: "8px", width: "296px", height: "48px", "&:hover": { border: "1px solid #56BCE2" } }}
                onClick={() => {
                  setGetir(false)
                  setTrendyol(false)
                  setYemekSepeti(true)
                }}
              />
            </> : !getirEkle & !trendyolEkle & yemekSepetiEkle ? <>
              <FormControlLabel
                value="Getir"
                control={<Radio />}
                label="Getir"
                sx={{ border: "1px solid #D3DBDE", borderRadius: "8px", width: "296px", height: "48px", mr: "16px", ml: "10px", "&:hover": { border: "1px solid #56BCE2" } }}
                onClick={() => {
                  setGetir(true)
                  setTrendyol(false)
                  setYemekSepeti(false)
                }}
              />
              <FormControlLabel
                value="Trendyol"
                control={<Radio />}
                label="Trendyol"
                sx={{ border: "1px solid #D3DBDE", borderRadius: "8px", width: "296px", height: "48px", mr: "16px", "&:hover": { border: "1px solid #56BCE2" } }}
                onClick={() => {
                  setGetir(false)
                  setTrendyol(true)
                  setYemekSepeti(false)
                }}
              />
            </> : !getirEkle & trendyolEkle & yemekSepetiEkle ? <>
              <FormControlLabel
                value="Getir"
                control={<Radio />}
                label="Getir"
                sx={{ border: "1px solid #D3DBDE", borderRadius: "8px", width: "608px", height: "48px", mr: "16px", ml: "10px", "&:hover": { border: "1px solid #56BCE2" } }}
                onClick={() => {
                  setGetir(true)
                  setTrendyol(false)
                  setYemekSepeti(false)
                }}
              />
            </> : getirEkle & !trendyolEkle & yemekSepetiEkle ? <>
              <FormControlLabel
                value="Trendyol"
                control={<Radio />}
                label="Trendyol"
                sx={{ border: "1px solid #D3DBDE", borderRadius: "8px", ml: "10px", width: "608px", height: "48px", mr: "16px", "&:hover": { border: "1px solid #56BCE2" } }}
                onClick={() => {
                  setGetir(false)
                  setTrendyol(true)
                  setYemekSepeti(false)
                }}
              />
            </> : getirEkle & trendyolEkle & !yemekSepetiEkle ? <>
              <FormControlLabel
                value="Yemeksepeti"
                control={<Radio />}
                label="Yemeksepeti"
                sx={{ border: "1px solid #D3DBDE", borderRadius: "8px", ml: "10px", width: "608px", height: "48px", "&:hover": { border: "1px solid #56BCE2" } }}
                onClick={() => {
                  setGetir(false)
                  setTrendyol(false)
                  setYemekSepeti(true)
                }}
              />
            </> : null}
          </RadioGroup>
        </FormControl>
      </div>
      {getirEkle & trendyolEkle & yemekSepetiEkle ? null : getir ? (<div>
        <TextField
          required
          type="text"
          placeholder="App Secret Key"
          sx={{ mt: "32px", mr: "16px", width: "296px" }}
        />
        <TextField
          required
          type="text"
          placeholder="Restaurant Secret Key"
          sx={{ mt: "32px", width: '296px', }}
        />
      </div>) : trendyol ? (<>
        <div>
          <TextField
            required
            type="text"
            placeholder="Api Key"
            sx={{ mt: "32px", mr: "16px", width: "296px" }}
          />
          <TextField
            required
            type="text"
            placeholder="Api Secret Key"
            sx={{ mt: "32px", width: '296px', }}
          />
        </div>
        <div>
          <TextField
            required
            type="text"
            placeholder="Supplier Id"
            sx={{ mt: "24px", width: '608px' }}
          />
        </div>
      </>) : yemekSepeti ? (<>
        <div>
          <TextField
            required
            type="text"
            placeholder="User Name"
            sx={{ mt: "24px", width: '608px' }}
          />
        </div>
        <div>
          <TextField
            required
            type="password"
            placeholder="Password"
            sx={{ mt: "32px", width: '608px' }}
          />
        </div>
        <div>
          <TextField
            required
            type="text"
            placeholder="Catalog Name"
            sx={{ mt: "32px", mr: "16px", width: "296px" }}
          />
          <TextField
            required
            type="text"
            placeholder="Catalog Id"
            sx={{ mt: "32px", width: '296px', }}
          />
        </div>
      </>) : null}
      {getirEkle & trendyolEkle & yemekSepetiEkle ? null :
        <div>
          <Button sx={{ width: "608px", height: '48px', border: "1px solid #FF937D", boxSizing: "border-box", borderRadius: "8px", mt: "24px", color: "#FF937D", fontFamily: "Open Sans", fontWeight: "600", fontSize: "18px", mb: "48px" }} onClick={() => handleClickButton()}>
            Restoran Ekle
          </Button>
        </div>}
    </Box>
  );
}

export default App;
