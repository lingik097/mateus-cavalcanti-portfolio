
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (checked: boolean) => {
    setLanguage(checked ? 'pt-br' : 'en');
  };

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="language-switch" className="text-sm text-muted-foreground">
        EN
      </Label>
      <Switch
        id="language-switch"
        checked={language === 'pt-br'}
        onCheckedChange={handleLanguageChange}
        className="data-[state=checked]:bg-green-600"
      />
      <Label htmlFor="language-switch" className="text-sm text-muted-foreground">
        PT
      </Label>
    </div>
  );
};

export default LanguageSwitch;
