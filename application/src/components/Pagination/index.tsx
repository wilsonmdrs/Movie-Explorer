import * as S from './Pagination.styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useMemo } from 'react';

interface PaginationProps {
  totalPages: number;
  pageNumber: number;
  onSelectPage: (page: number) => void;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

export const Pagination = ({
  totalPages,
  pageNumber,
  onSelectPage,
  onNextPage,
  onPreviousPage,
}: PaginationProps) => {
  const pages = useMemo(() => {
    return Array(totalPages)
      .fill(0)
      .map((_, index) => index + 1)
      .slice(1, -1);
  }, [totalPages]);

  const showPageNumber = (page: number): boolean => {
    if (page > pageNumber - 5 && page < pageNumber + 5) return true;
    if (totalPages < 11) return true;
    if (pageNumber <= 5 && page < 11) return true;
    if (pageNumber > totalPages - 5 && page > totalPages - 10) return true;
    return false;
  };

  const showLeftMoreIcon = () => {
    if (pageNumber - 5 > 1) return true;
    if (totalPages > 12 && pageNumber > 5) return true;
    return false;
  };

  const showRightMoreIcon = () => {
    if (pageNumber + 5 < totalPages && totalPages > 10) return true;
    if (totalPages > 12 && pageNumber < totalPages - 10) return true;

    return false;
  };

  return (
    <S.PaginationContainer>
      <S.PaginationArrow
        aria-label="previous"
        onClick={onPreviousPage}
        position="left"
      >
        <ArrowBackIosNewIcon />
      </S.PaginationArrow>
      <S.PaginationPosition
        onClick={() => onSelectPage(1)}
        selected={1 === pageNumber}
      >
        {1}
      </S.PaginationPosition>
      {showLeftMoreIcon() && (
        <S.PaginationPosition>
          <MoreHorizIcon />
        </S.PaginationPosition>
      )}
      {[...pages].map((page) => {
        if (showPageNumber(page)) {
          return (
            <S.PaginationPosition
              key={`page-${page}`}
              onClick={() => onSelectPage(page)}
              selected={page === pageNumber}
            >
              {page}
            </S.PaginationPosition>
          );
        }
        return null;
      })}
      {showRightMoreIcon() && (
        <S.PaginationPosition>
          <MoreHorizIcon />
        </S.PaginationPosition>
      )}
      {totalPages > 1 && (
        <S.PaginationPosition
          onClick={() => onSelectPage(totalPages)}
          selected={totalPages === pageNumber}
        >
          {totalPages}
        </S.PaginationPosition>
      )}
      <S.PaginationArrow
        aria-label="next"
        onClick={onNextPage}
        position="right"
      >
        <ArrowForwardIosIcon />
      </S.PaginationArrow>
    </S.PaginationContainer>
  );
};
