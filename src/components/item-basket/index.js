import {memo, useCallback} from 'react';
import {numberFormat} from "../../utils";
import {cn as bem} from "@bem-react/classname";

import propTypes from "prop-types";
import PropTypes from "prop-types";
import './style.css';

function ItemBasket(props) {

  const cn = bem('ItemBasket');

  const callbacks = {
    onRemove: (e) => {
      e.preventDefault()
      props.onRemove(props.item._id)
    }
  };

  return (
    <div className={cn()}>
      {/*<div className={cn('code')}>{props.item._id}</div>*/}
      <div className={cn('title')}>{props.item.title}</div>
      <div className={cn('right')}>
        <div className={cn('cell')}>{numberFormat(props.item.price)} ₽</div>
        <div className={cn('cell')}>{numberFormat(props.item.amount || 0)} шт</div>
        <div className={cn('cell')}><button onClick={callbacks.onRemove}>Удалить</button></div>
      </div>
    </div>
  )
}

ItemBasket.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number
  }).isRequired,
  link: PropTypes.string,
  onLink: PropTypes.func,
  onRemove: PropTypes.func,
  labelCurr: PropTypes.string,
  labelDelete: PropTypes.string,
  labelUnit: PropTypes.string,
}

ItemBasket.defaultProps = {
  onRemove: () => {},
  labelCurr: '₽',
  labelUnit: 'шт',
  labelDelete: 'Удалить',
}

export default memo(ItemBasket);
