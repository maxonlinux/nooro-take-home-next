import {
  Button,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

interface TaskDeleteModalProps {
  showDeleteModal: boolean;
  setShowDeleteModal: (showDeleteModal: boolean) => void;
  onDelete: () => Promise<void>;
}

function TaskDeleteModal({
  showDeleteModal,
  setShowDeleteModal,
  onDelete,
}: TaskDeleteModalProps) {
  const handleDelete = () => {
    onDelete();
    setShowDeleteModal(false);
  };

  const handleCancel = () => {
    setShowDeleteModal(false);
  };

  return (
    <Dialog
      as="div"
      className="relative z-50 focus:outline-none"
      open={showDeleteModal}
      onClose={setShowDeleteModal}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-background shadow-lg border border-white/10 p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
              Delete Task
            </DialogTitle>
            <Description className="mt-2 text-sm/6 text-white/50">
              Are you sure you want to delete this task? This action cannot be
              undone.
            </Description>
            <div className="flex gap-4 mt-4 justify-end">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-red-500/10 py-1.5 px-3 text-sm/6 font-semibold text-red-500 focus:outline-none data-[hover]:bg-red-700/10 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-red-700/10"
                onClick={handleDelete}
              >
                <span className="material-symbols-rounded text-lg">delete</span>
                Delete
              </Button>
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-white/10 border border-white/10 py-1.5 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[hover]:bg-white/20 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-white/20"
                onClick={handleCancel}
              >
                <span className="material-symbols-rounded text-lg">close</span>
                Cancel
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default TaskDeleteModal;
