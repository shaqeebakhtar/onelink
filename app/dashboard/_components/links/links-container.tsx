'use client';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import React, { useEffect, useId, useState } from 'react';
import LinkCard, { LinkCardSkeleton } from './link-card';
import { useQuery } from '@tanstack/react-query';
import { getAllLinks } from '@/data-access/links';
import { Link } from '@/db/schema';

const LinksContainer = () => {
  const [links, setLinks] = useState<Link[]>([]);

  const getAllLinksQuery = useQuery({
    queryKey: ['links'],
    queryFn: getAllLinks,
  });

  useEffect(() => {
    if (getAllLinksQuery.isSuccess && getAllLinksQuery.data) {
      setLinks(getAllLinksQuery.data);
    }
  }, [getAllLinksQuery.data, getAllLinksQuery.isSuccess]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setLinks((links) => {
        const oldIndex = links.indexOf(
          links.filter((link) => link.id === Number(active?.id))[0]
        );
        const newIndex = links.indexOf(
          links.filter((link) => link.id === Number(over?.id))[0]
        );

        return arrayMove(links, oldIndex, newIndex);
      });
    }
  };

  const id = useId();

  return (
    <>
      {getAllLinksQuery.isLoading ? (
        <LinksContainerSkeleton />
      ) : (
        getAllLinksQuery.isSuccess && (
          <DndContext onDragEnd={handleDragEnd} id={id}>
            <div className="space-y-4 pb-40">
              <SortableContext items={links}>
                {links.map((link) => (
                  <LinkCard key={link.id} link={link} />
                ))}
              </SortableContext>
            </div>
          </DndContext>
        )
      )}
    </>
  );
};

export default LinksContainer;

export const LinksContainerSkeleton = () => {
  return (
    <div className="space-y-4 pb-40">
      {[...Array(4)].map((_, i) => (
        <LinkCardSkeleton key={i} />
      ))}
    </div>
  );
};
