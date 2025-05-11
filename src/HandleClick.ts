import { FileOpener, FileOpenerOptions } from '@capacitor-community/file-opener';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { isPlatform } from '@ionic/react';
import { appBaseDirectory, appFilesDirectoryName, appBaseDownloadUrl } from './AppConsts';

const handleClick = (e: any) => {
  const href = e.currentTarget.getAttribute("href");
  const fileName = href.split("/").pop();
  const filePath = `${appFilesDirectoryName}/${fileName}`;
  const fileUrl = `${appBaseDownloadUrl}/${fileName}`;

  if (!isPlatform('mobile'))
  {
    e.currentTarget.setAttribute("href", fileUrl);
    return;
  }

  e.preventDefault();

  let open = async () => {
    const { uri } = await Filesystem.getUri({directory: appBaseDirectory, path: filePath});
    const fileOpenerOptions = {
      filePath: uri,
      openWithDefault: true,
    };

    try
    {
      console.log(`Opening file ${filePath}`);
      await FileOpener.open(fileOpenerOptions);
    }
    catch (e: any)
    {
      console.log(e);
      if (e.code == '9')
      {
        console.log(`Saving ${fileUrl} to ${filePath}`);
        try
        {
	  await Filesystem.downloadFile({
	    method: 'GET',
	    url: fileUrl,
	    directory: appBaseDirectory,
	    path: filePath,
	    recursive: true,
            progress: true
	  });
	  console.log(`Opening file ${filePath}`);
	  await FileOpener.open(fileOpenerOptions);
        }
        catch (e)
        {
          console.log(e);
        }
      }
    }
  }

  open();
}

export default handleClick;
