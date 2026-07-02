import './popup.css';
import '../common/common.css';

import { TextInput } from '../inputs/TextInput';
import { MultiSelect } from '../inputs/MultiSelect';

import { Button, Stack, Typography,
  Dialog, DialogActions,
  DialogContent, DialogTitle
} from "@mui/material";

import { useTranslation } from 'react-i18next';

export const FormItem = ({
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
                  {t('ui.labels.forms.item.edit')}
                </Typography>
              : 
                <Typography variant='h4'>
                  {t('ui.labels.forms.item.delete')}
                </Typography>
            }
          </DialogTitle>

          <DialogContent>

            <form onSubmit={handleSubmit} id="item-form">

              <Stack spacing={2} sx={{paddingTop:'8px'}}>

                <TextInput
                  id="id"
                  name="id"
                  label={t('ui.pages.store.columns.id')}
                  disabled
                  value={item && item.id}
                />
                
                <TextInput
                  id="item"
                  name="item"
                  label={t('ui.pages.store.columns.item')}
                  value={item && item.item}
                  disabled={state==="edit" ? false : true}
                />

                <MultiSelect
                  label={t('ui.pages.store.columns.categories')}
                  disabled={state==="edit" ? false : true}
                  items={item && item.categories}
                  defaultValue={item &&
                    item.categories &&
                    item.categories.map &&
                    item.categories.map(cat => cat.id)}
                />

                <MultiSelect
                  label={t('ui.pages.store.columns.materials')}
                  disabled={state==="edit" ? false : true}
                  items={item && item.materials}
                  defaultValue={item &&
                    item.materials &&
                    item.materials.map &&
                    item.materials.map(mat => mat.id)}
                />

                <TextInput
                  id="price"
                  name="price"
                  label={t('ui.pages.store.columns.price')}
                  value={item && item.price}
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
                <Button type="submit" form="item-form" className='button'>
                  {t('ui.labels.buttons.edit')}
                </Button>
              : 
                <Button type="submit" form="item-form" className='button'>
                  {t('ui.labels.buttons.delete')}
                </Button>
            }
          </DialogActions>

        </Dialog>

      </div>
    </>
  );
}