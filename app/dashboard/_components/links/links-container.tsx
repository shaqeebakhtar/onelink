'use client';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import React, { useId, useState } from 'react';
import LinkCard from './link-card';
import { useQuery } from '@tanstack/react-query';

const LinksContainer = () => {
  const [items, setItems] = useState(['1', '2', '3', '4']);

  // const query = useQuery({
  //   queryKey: ['todos'],
  //   queryFn: async () => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  //     const data = res.json();
  //     return data;
  //   },
  // });

  // console.log(query.data);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active?.id as string);
        const newIndex = items.indexOf(over?.id as string);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const id = useId();

  return (
    <DndContext onDragEnd={handleDragEnd} id={id}>
      <div className="space-y-4 pb-40">
        <SortableContext items={items}>
          {items.map((id) => (
            <LinkCard key={id} id={id} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default LinksContainer;
