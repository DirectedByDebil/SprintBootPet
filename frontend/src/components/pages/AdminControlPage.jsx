import { SectionEditItems } from '../sections/admin/SectionEditItems';
import { SectionEditMaterials } from '../sections/admin/SectionEditMaterials';
import { SectionEditCategories } from '../sections/admin/SectionEditCategories';

export const AdminControlPage = () => {

  return (
    <>
      <div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 2,
          padding: 2,
        }}>
          <SectionEditCategories />
          <SectionEditMaterials />
        </div>
        
        <SectionEditItems />
      </div>
    </>
  );
}