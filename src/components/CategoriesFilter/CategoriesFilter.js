import react from 'react';
import style from "./_CategoriesFilter.module.scss"

const CategoriesFilter = () => {
  return (
    <div class='container'>
      <div class='row align-items-start'>
        <ul class='list-group'>
          <li class='list-group-item'>
            <input
              class='form-check-input me-1'
              type='checkbox'
              value='electrodomesticos'
              aria-label='...'
            />
            <div className={style.hola}>electrodomesticos</div>
          </li>
          <li class='list-group-item'>
            <input
              class='form-check-input me-1'
              type='checkbox'
              value='computacion'
              aria-label='...'
            />
            computación
          </li>
          <li class='list-group-item'>
            <input
              class='form-check-input me-1'
              type='checkbox'
              value='indumentaria'
              aria-label='...'
            />
            indumentaria
          </li>
          <li class='list-group-item'>
            <input
              class='form-check-input me-1'
              type='checkbox'
              value='indumentaria'
              aria-label='...'
            />
            vehicular
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoriesFilter;
