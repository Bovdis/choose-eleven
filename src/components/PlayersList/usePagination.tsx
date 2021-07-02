import React, { useState } from 'react';
import { Players } from '../../models';

type Props = {
  players?: Players
}

const usePagination = ({ players }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [playersPerPage] = useState(15);

  const indexOfLastTodo = currentPage * playersPerPage;
  const indexOfFirstTodo = indexOfLastTodo - playersPerPage;
  const currentPlayers = players?.slice(indexOfFirstTodo, indexOfLastTodo);

  

  const pagination = () => {
    if (players) {
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(players.length / playersPerPage); i++) {
        pageNumbers.push(i);
      }

      return pageNumbers;
    }
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return {
    currentPage,
    currentPlayers,
    handlePageChange,
    pagination
  }
}

export default usePagination
