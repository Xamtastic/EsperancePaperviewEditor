﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Autofac;
using Chat.Esperance.Paperview.ViewModels;
using Chat.Esperance.PaperviewApi.Interfaces;
using Xamarin.Forms;

namespace Chat.Esperance.Paperview.Pages
{
    public partial class MainPhonePage : MasterDetailPage
    {

        public MainPhonePage()
        {
            try
            {
                InitializeComponent();
                NavigationPage.SetHasNavigationBar(this,false);
                using (var scope = DI.Container.BeginLifetimeScope())
                {
                    var service = scope.Resolve<INavigationService>();
                    ExhibitsPhonePage.BindingContext = service.GetViewModel("ExhibitsViewModel");
                    masterPhonePage.ListView.SelectedItem = null;
                    IsPresented = false;
                }
            }
            catch (Exception ex)
            {
                
            }

            masterPhonePage.ListView.ItemSelected += ItemSelected;

            MasterPhonePage.MainNavigationPage = this.MainNavigationPage;
        }

        private void ItemSelected(object sender, SelectedItemChangedEventArgs e)
        {
            var item = e.SelectedItem as MasterPageIndexItemViewModel;

            if(item?.ViewModelName == null) return;
            
            using (var scope = DI.Container.BeginLifetimeScope())
            {
                var service = scope.Resolve<INavigationService>();

                if (!MainNavigationPage.CurrentPage.BindingContext.GetType().Name.Equals(item.ViewModelName))
                {
                    MainNavigationPage.Navigation.PushAsync(service.GetBoundPage(item.ViewModelName));
                    NavigationPage.SetHasNavigationBar(MainNavigationPage.CurrentPage, false);
                }
                masterPhonePage.ListView.SelectedItem = null;
                IsPresented = false;
            }
        }
    }
}
