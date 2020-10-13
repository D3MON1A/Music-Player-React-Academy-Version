import fontawesome from '@fortawesome/fontawesome';
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faPauseCircle from '@fortawesome/fontawesome-free-solid/faPauseCircle';
import faCaretSquareRight from '@fortawesome/fontawesome-free-solid/faCaretSquareRight';
import faCaretSquareLeft from '@fortawesome/fontawesome-free-solid/faCaretSquareLeft';
fontawesome.config = {
  autoReplaceSvg: 'nest'
};
fontawesome.library.add(
    faPlay, faPauseCircle, faCaretSquareRight, faCaretSquareLeft
);