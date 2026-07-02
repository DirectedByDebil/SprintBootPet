import './popup.css';
import '../common/common.css';

import { TextInput } from '../inputs/TextInput';
import { StylePicker } from '../inputs/StylePicker';

import { Button, Stack, Typography,
  Dialog, DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";

import { useTranslation } from 'react-i18next';

export const FormMaterial = ({
  item={},
  state="edit",
  isOpened=false,
  onClose=()=>{}
}) => {

  const { t } = useTranslation('pages');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    
    onClose();
  };

  return (
    <>
      <div style={{
        display: isOpened ? 'block' : 'none'
      }}>

        <Dialog 
          open={isOpened}
          onClose={onClose}
          fullWidth
        >

          <DialogTitle>
            {
              state === "edit"
              ? 
                <Typography variant='h4'>
                  {t('ui.labels.forms.material.edit')}
                </Typography>
              : 
                <Typography variant='h4'>
                  {t('ui.labels.forms.material.delete')}
                </Typography>
            }
          </DialogTitle>

          <DialogContent>

            <form onSubmit={handleSubmit} id="material-form">

              <Stack spacing={2} sx={{paddingTop:'8px'}}>

                <TextInput
                  id="id"
                  name="id"
                  label={t('ui.pages.store.columns.id')}
                  disabled
                  value={item && item.id}
                />
                
                <TextInput
                  id="name"
                  name="name"
                  label={t('ui.pages.store.columns.material')}
                  value={item && item.label}
                  disabled={state==="edit" ? false : true}
                />

                <StylePicker
                  styleId={item && item.stylePreset}
                  disabled={state==="edit" ? false : true} 
                />

              </Stack>
            </form>
          </DialogContent>

          <DialogActions>

            <Button onClick={onClose} className='button'>
              {t('ui.labels.buttons.cancel')}
            </Button>
            {
              state==="edit"
              ? 
                <Button type="submit" form="material-form" className='button'>
                  {t('ui.labels.buttons.edit')}
                </Button>
              : 
                <Button type="submit" form="material-form" className='button'>
                  {t('ui.labels.buttons.delete')}
                </Button>
            }
          </DialogActions>

        </Dialog>

      </div>
    </>
  );
}