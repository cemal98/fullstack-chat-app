/* eslint-disable */
import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader: React.FC = () => {
  const { selectedUser, setSelectedUser } = useChatStore(); // Zustand store'dan gelen değerler
  const { onlineUsers } = useAuthStore(); // Zustand store'dan online kullanıcılar

  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        {/* Sol tarafta kullanıcı bilgileri */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img
                src={selectedUser?.profilePic || "/avatar.png"} // Profil resmi veya varsayılan resim
                alt={selectedUser?.fullName || "User Avatar"} // Alt yazı, kullanıcı adı varsa kullanılır
              />
            </div>
          </div>

          {/* Kullanıcı Bilgileri */}
          <div>
            <h3 className="font-medium">{selectedUser?.fullName || "No User Selected"}</h3>
            <p className="text-sm text-base-content/70">
              {selectedUser && onlineUsers.includes(selectedUser._id)
                ? "Online"
                : "Offline"}
            </p>
          </div>
        </div>

        {/* Sağ tarafta kapatma butonu */}
        <button onClick={() => setSelectedUser(null)} aria-label="Close Chat">
          <X />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
