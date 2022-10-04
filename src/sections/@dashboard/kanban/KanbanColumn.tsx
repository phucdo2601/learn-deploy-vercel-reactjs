import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';
// @mui
import { Paper, Stack, Button } from '@mui/material';
// redux

// components
import Iconify from '../../../components/Iconify';
//
import KanbanAddTask from './KanbanTaskAdd';
import KanbanTaskCard from './KanbanTaskCard';
import KanbanColumnToolBar from './KanbanColumnToolBar';

// ----------------------------------------------------------------------

KanbanColumn.propTypes = {
  column: PropTypes.object,
  index: PropTypes.number,
};

export default function KanbanColumn({ column, index }: any) {
  // const dispatch = useDispatch();
  // const { board } = useSelector((state) => state.kanban);
  const [open, setOpen] = useState(false);

  const { name, cardIds, id } = column;

  const handleOpenAddTask = () => {
    setOpen((prev) => !prev);
  };

  const handleCloseAddTask = () => {
    setOpen(false);
  };

  const handleDeleteTask = (cardId: any) => {
    // dispatch(deleteTask({ cardId, columnId: id }));
  };

  const handleUpdateColumn = async (newName: any) => {
    try {
      if (newName !== name) {
        // dispatch(updateColumn(id, { ...column, name: newName }));
        // enqueueSnackbar('Update success!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteColumn = async () => {
    try {
      // dispatch(deleteColumn(id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTask = (task: any) => {
    // dispatch(addTask({ card: task, columnId: id }));
    handleCloseAddTask();
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Paper
          {...provided.draggableProps}
          ref={provided.innerRef}
          variant="outlined"
          sx={{ px: 2, bgcolor: 'grey.5008' }}
        >
          <Stack spacing={3} {...provided.dragHandleProps}>
            <KanbanColumnToolBar columnName={name} onDelete={handleDeleteColumn} onUpdate={handleUpdateColumn} />

            <Droppable droppableId={id} type="task">
              {(provided) => (
                <Stack ref={provided.innerRef} {...provided.droppableProps} spacing={2} width={280}>
                  {/* {cardIds.map((cardId: any, index: any) => (
                    <KanbanTaskCard
                      key={cardId}
                      onDeleteTask={handleDeleteTask}
                      card={board?.cards[cardId]}
                      index={index}
                    />
                  ))} */}
                  {provided.placeholder}
                </Stack>
              )}
            </Droppable>

            <Stack spacing={2} sx={{ pb: 3 }}>
              {open && <KanbanAddTask onAddTask={handleAddTask} onCloseAddTask={handleCloseAddTask} />}

              <Button
                fullWidth
                size="large"
                color="inherit"
                startIcon={<Iconify icon={'eva:plus-fill'} width={20} height={20} />}
                onClick={handleOpenAddTask}
                sx={{ fontSize: 14 }}
              >
                Add Task
              </Button>
            </Stack>
          </Stack>
        </Paper>
      )}
    </Draggable>
  );
}