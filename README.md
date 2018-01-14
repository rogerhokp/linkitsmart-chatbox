# linkitsmart-chatbox

Mounting the root FS on an SD card
- https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/tutorials/file-storage/mounting-the-root-fs-on-an-sd-card
- confirm ext4 support
   - `cat /proc/filesystems`
   - `uname -r` check keneral version
5opkg install kmod-fs-ext4_4.4.46-1_mipsel_24kc.ipk --nodeps
```
 
