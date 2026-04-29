
if (['complete', 'interactive'].includes(document.readyState) ) {

  console.log('ok');
  checkJavaCtx();

} else {

  console.log('wait till loaded');
  document.addEventListener('DOMContentLoaded', (e) => {
      
    console.log('loaded');
    checkJavaCtx();
  });
}

function checkJavaCtx() {

  try {

    const shop = document.getElementById('shop');
    if (!shop || !shop.dataset) {
      console.warn('no shop object found!');
      return;
    }

    const section = shop.dataset.section;
    console.log(section);

  } catch (err) {
    console.error(err);        
  }

}