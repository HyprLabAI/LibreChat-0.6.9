import { useGetStartupConfig } from 'librechat-data-provider/react-query';
import { useLocalize } from '~/hooks';

export default function Footer() {
  const { data: config } = useGetStartupConfig();
  const localize = useLocalize();
  return (
    <div className="relative px-2 py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px]">
      <span>
        {typeof config?.customFooter === 'string' ? (
          config.customFooter
        ) : (
          <>
          HyprLab Chat&nbsp;&nbsp; ─ &nbsp;&nbsp;Credits to <a href="https://github.com/danny-avila/LibreChat" target="_blank" rel="noreferrer" class="underline">@LibreChat</a>
          </>
        )}
      </span>
    </div>
  );
}
